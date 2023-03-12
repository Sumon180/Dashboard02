import React from "react";
import { RouteObject } from "react-router-dom";
import ErrorPage from "../layout/ErrorPage";
import Home from "../pages/Dashboard";
import Dashboard from "../pages/Dashboard";

const App = React.lazy(() => import("../App"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default router;
