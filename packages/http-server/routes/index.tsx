import { prisma } from "@quarto/db";
export default async function Home() {
  // trying to get hot reloading to work
  // const inlineScript = `
  //   (function() {
  //     const ws = new WebSocket('wss://localhost:3005');
  //     ws.onmessage = function(event) {
  //       if (event.data === 'reload') {
  //         window.location.reload();
  //       }
  //     };
  //   })();
  // `;
  const posts = await prisma.note.findMany();
  // console.log(posts);
  return (
    <div className="content">
      {/* <script dangerouslySetInnerHTML={{ __html: inlineScript }}></script> */}
      <h1>JSX Rendered with Bun</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <a href="/blog">Blog</a>
    </div>
  );
}
