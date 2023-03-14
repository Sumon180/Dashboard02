import React from "react";
import { RouteObject } from "react-router-dom";
import ErrorPage from "../layout/ErrorPage";
import Chat from "../pages/Chat";
import Email from "../pages/Email";
import ForgotPassword from "../pages/ForgotPassword";
import LoginForm from "../pages/Login";
import RegisterForm from "../pages/Register";
import VerifyEmail from "../pages/VarifyEmail";

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
  {
    path: "/pages/athentication/login",
    element: <LoginForm />,
  },
  {
    path: "/pages/athentication/register",
    element: <RegisterForm />,
  },
  {
    path: "/pages/athentication/reset",
    element: <ForgotPassword />,
  },
  {
    path: "/pages/athentication/verify",
    element: <ForgotPassword />,
  },
  {
    path: "/pages/athentication/verifyemail",
    element: <VerifyEmail />,
  },
];

export default router;
