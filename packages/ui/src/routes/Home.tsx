import { prisma } from "@quarto/db";
export const Home = async () => {
  const posts = await prisma.note.findMany();
  console.log(posts);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <a href="/blog">Blog</a>
    </div>
  );
};
