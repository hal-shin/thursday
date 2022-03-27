import { AppProviders } from "@/providers/Providers";
import { AppRoutes } from "@/routes";
import React from "react";

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
