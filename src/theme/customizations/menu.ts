import { palette } from "@/theme/palette";
import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const menuCustomizations: Components<Theme> = {
  MuiMenu: {
    styleOverrides: {
      paper: {
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)", // Added shadow to menu
        border: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.12)",
      },
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
