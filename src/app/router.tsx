import { useRoutes } from "react-router-dom";

import { homeRoutes } from "@/modules/home";
import { jotsRoutes } from "@/modules/jots/routes";
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
        children: homeRoutes,
      },
      {
        children: jotsRoutes,
      },
    ],
  },
];

export const AppRouter = () => {
  const route = useRoutes(routes);

  return route;
};
