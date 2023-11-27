import { default as Home } from "@quarto/ui/routes/Home.tsx";
import { default as Blog } from "@quarto/ui/routes/Blog.tsx";

Bun.serve({
  port: 3005,
  fetch(req) {
    const url = new URL(req.url);
    console.log("PATH: ", url.pathname);
    if (url.pathname.endsWith("/")) return new Response(Home);
    if (url.pathname.endsWith("/blog")) return new Response(Blog);
    //wtf is up with this favicon.ico request that happens on every page load?
    if (url.pathname.endsWith("/favicon.ico")) return new Response("");

    // all other routes
    return new Response("Hello!");
  }
});
console.log("Listening on http://localhost:3005");
