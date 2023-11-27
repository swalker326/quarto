"use server";
import { renderToReadableStream } from "react-dom/server";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};
export const stream = await renderToReadableStream(<App />);
export default App;
