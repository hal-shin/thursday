import { theme } from "@/config/theme";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

export const AppProviders = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <Router>{children}</Router>
    </ChakraProvider>
  );
};
