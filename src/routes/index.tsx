import React from "react";
import { RouteObject } from "react-router-dom";
import ErrorPage from "../layout/ErrorPage";
import Chat from "../pages/Chat";
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
  {
    path: "chat",
    element: <Chat />,
  },
];

export default router;
