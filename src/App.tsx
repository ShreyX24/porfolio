import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/router";
import { ColorProvider } from "./context/colorProvider";

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
