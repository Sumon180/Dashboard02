import React from "react";
import { RouteObject } from "react-router-dom";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

const App = React.lazy(() => import("../App"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default router;
