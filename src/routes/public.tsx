import { Dashboard } from "@/features/misc";
import React from "react";

// import { lazyImport } from "@/utils/lazyImport";
import { Navigate } from "react-router-dom";

// const { Dashboard } = lazyImport(() => import("@/features/misc"), "Dashboard");

export const publicRoutes = [
  {
    path: "/main_window",
    element: <Navigate to="/" />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
