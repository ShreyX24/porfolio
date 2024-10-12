import { RouterProvider } from "react-router-dom";
import "./App.css";

import "../src/styles/input.css";
import { ColorProvider } from "./context/colorProvider";
import { router } from "./routes/router";

function App() {
  return (
    <>
      <ColorProvider>
        <RouterProvider router={router} />
      </ColorProvider>
    </>
  );
}

export default App;
