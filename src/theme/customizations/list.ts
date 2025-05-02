import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const listCustomizations: Components<Theme> = {
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },
};
