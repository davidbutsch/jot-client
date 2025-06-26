import { useRoutes } from "react-router-dom";

import { homeRoutes } from "@/modules/home";
import { jotsRoutes } from "@/modules/jots";
import { sharedRoutes } from "@/modules/shared";
import { CssBaseline } from "@mui/material";
import { Outlet, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    element: (
      <>
        <CssBaseline />
        <Outlet />
      </>
    ),
    children: [
      {
        children: jotsRoutes,
      },
      {
        children: homeRoutes,
      },
      {
        path: "/shared/",
        children: sharedRoutes,
      },
    ],
  },
];

export const AppRouter = () => {
  const route = useRoutes(routes);

  return route;
};
