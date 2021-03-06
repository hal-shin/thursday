import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

// import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  // const auth = useAuth();

  // const commonRoutes = [{ path: "/", element: <Landing /> }];

  // const routes = auth.user ? protectedRoutes : publicRoutes;

  // const element = useRoutes([...routes, ...commonRoutes]);
  const element = useRoutes([...publicRoutes]);

  return <>{element}</>;
};
