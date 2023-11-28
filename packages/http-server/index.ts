import { Home } from "@quarto/ui/routes/Home.tsx";
import { Blog } from "@quarto/ui/routes/Blog.tsx";
import { renderToReadableStream } from "react-dom/server";
import { prisma } from "@quarto/db";

Bun.serve({
  port: 3005,
  development: true,
  error: (err) => {
    console.error(err);
    return new Response(err.message, { status: 500 });
  },
  async fetch(req) {
    const url = new URL(req.url);
    console.log("HOME: ", Home);
    if (url.pathname.endsWith("/")) {
      const component = await Home();
      const stream = await renderToReadableStream(component);
      return new Response(stream);
    }
    if (url.pathname.endsWith("/blog")) {
      const component = await Blog();
      const stream = await renderToReadableStream(component);
      return new Response(stream);
    }

    // all other routes
    return new Response("Hello!");
  }
});
console.log("Listening on http://localhost:3005");
