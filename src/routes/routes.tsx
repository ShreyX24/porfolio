import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { ErrorPage } from '../pages/error-page';
import { Root } from '../pages/root';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
