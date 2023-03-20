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
import Preview from "../pages/invoice/Preview";
import Edit from "../pages/invoice/Edit";
import Add from "../pages/invoice/Add";
import HelpCenter from "../pages/HelpCenter";
import UserProfile from "../pages/UserProfile";
import AccountSetting from "../pages/AccountSetting";
import AccountPricing from "../pages/AccountPricing";
import FAQ from "../pages/FAQ";
import Miscellaneous from "../pages/Miscellaneous";

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
    path: "/invoice/preview",
    element: <Preview />,
  },
  {
    path: "/invoice/edit",
    element: <Edit />,
  },
  {
    path: "/invoice/add",
    element: <Add />,
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
  {
    path: "/pages/helpcenter",
    element: <HelpCenter />,
  },
  {
    path: "/pages/userprofile",
    element: <UserProfile />,
  },
  {
    path: "/pages/accountsetting",
    element: <AccountSetting />,
  },
  {
    path: "/pages/accountpricing",
    element: <AccountPricing />,
  },
  {
    path: "/pages/faq",
    element: <FAQ />,
  },
  {
    path: "/pages/miscellaneous",
    element: <Miscellaneous />,
  },
];

export default router;
