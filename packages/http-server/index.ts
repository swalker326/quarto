import { ServerWebSocket } from "bun";
import fs from "fs";
import { renderToReadableStream } from "react-dom/server";
import chokidar from "chokidar";

let webSocket: ServerWebSocket<unknown>;
const routes = fs.readdirSync("./routes");
const watcher = chokidar.watch("./routes");

watcher.on("change", () => {
  if (!webSocket) {
    console.log("No client connected");
    return;
  } else {
    console.log("Reloading client");
    webSocket.send("reload");
  }
});

const routesMap = routes.reduce((acc, route) => {
  const name = route.split(".")[0];
  if (name === "index") {
    acc["/"] = () => import(`./routes/${name}`).then((m) => m.default());
    return acc;
  }

  acc[name] = () => import(`./routes/${name}`).then((m) => m.default());
  return acc;
}, {} as Record<string, () => Promise<JSX.Element>>);

Bun.serve({
  port: 3005,
  development: true,
  error: (err) => {
    console.error(err);
    return new Response(err.message, { status: 500 });
  },
  async fetch(req, server) {
    const url = new URL(req.url);
    for (const route in routesMap) {
      if (url.pathname.endsWith(route.toLowerCase())) {
        const component = await routesMap[route]();
        const stream = await renderToReadableStream(component);
        return new Response(stream, {
          status: 200
        });
      }
    }
    return new Response("Not found", { status: 404 });
    server.upgrade(req, {});
  },
  websocket: {
    open: (ws) => {
      console.log("!!!Client connected");
      webSocket = ws;
    },
    message: (ws, msg) => {
      console.log(msg);
    }
  }
});
console.log("Listening on http://localhost:3005");
