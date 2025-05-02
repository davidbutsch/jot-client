import { palette } from "@/theme/palette";
import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const menuCustomizations: Components<Theme> = {
  MuiMenu: {
    styleOverrides: {
      paper: {},
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: palette.text?.secondary, // menu item icon color -> text.secondary
      },
    },
  },
};
