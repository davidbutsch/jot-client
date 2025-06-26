import { AppLayout } from "@/modules/layout";
import { Outlet, RouteObject } from "react-router-dom";
import { SharedPage } from "./SharedPage";

export const sharedRoutes: RouteObject[] = [
  {
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [{ path: "/shared/", element: <SharedPage /> }],
  },
];
