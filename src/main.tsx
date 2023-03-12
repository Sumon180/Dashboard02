import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes";
import LoadingSpinner from "./layout/LoadingPage";
import { Provider } from "react-redux";
import { Store } from "./app/Store";
import { ThemeProvider } from "@material-tailwind/react";

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {" "}
    <Suspense fallback={<LoadingSpinner />}>
      <Provider store={Store}>
        <RouterProvider router={routes} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
