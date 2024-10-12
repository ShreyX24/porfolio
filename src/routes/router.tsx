import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Home } from "../pages/home";
import { ErrorPage } from "../pages/errorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
