import React from "react";
import { RouteObject } from "react-router-dom";
import ErrorPage from "../layout/ErrorPage";
import Home from "../pages/Dashboard";
import Email from "../pages/Email";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));

const router: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "email",
    element: <Email />,
  },
];

export default router;
