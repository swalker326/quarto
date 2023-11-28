import { renderToReadableStream } from "react-dom/server";
import Blog from "./routes/Blog";
import Home from "./routes/Home";

const App = () => {
  return (
    <>
      <Home />
      <Blog />
    </>
  );
};
export const stream = await renderToReadableStream(<App />);
export default App;
