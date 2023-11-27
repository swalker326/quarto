"use server";
import { renderToReadableStream } from "react-dom/server";

const App = () => {
  return (
    <div className="content">
      <h1>Blog</h1>
      <a href="/">Home</a>
    </div>
  );
};
export default await renderToReadableStream(<App />);
