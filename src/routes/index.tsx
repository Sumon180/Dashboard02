import React from "react";
import { RouteObject } from "react-router-dom";
import ErrorPage from "../layout/ErrorPage";
import Chat from "../pages/Chat";
import Email from "../pages/Email";
import ForgotPassword from "../pages/authPage/ForgotPassword";
import LoginForm from "../pages/authPage/Login";
import RegisterForm from "../pages/authPage/Register";
import VerifyEmail from "../pages/authPage/VarifyEmail";
import List from "../pages/invoice/List";
import UserList from "../pages/user/UserList";
import View from "../pages/user/View";

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
    path: "/invoice/list",
    element: <List />,
  },
  {
    path: "/user/list",
    element: <UserList />,
  },
  {
    path: "/user/view",
    element: <View />,
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
