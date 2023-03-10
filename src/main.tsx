import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes";
import LoadingSpinner from "./pages/LoadingPage";

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={routes} />
    </Suspense>
  </React.StrictMode>
);
