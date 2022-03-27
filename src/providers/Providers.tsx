import { APP_BASE_ROUTE } from "@/config";
import { theme } from "@/config/theme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: Props) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ChakraProvider theme={theme}>
        <Router basename={APP_BASE_ROUTE}>{children}</Router>
      </ChakraProvider>
    </React.Suspense>
  );
};
