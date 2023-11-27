"use server";
import { renderToReadableStream } from "react-dom/server";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <a href="/blog">Blog</a>
    </div>
  );
};
export default await renderToReadableStream(<App />);
