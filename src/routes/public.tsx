import React from "react";

import { lazyImport } from "@/utils/lazyImport";

const { Dashboard } = lazyImport(() => import("@/features/misc"), "Dashboard");

export const publicRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
];
