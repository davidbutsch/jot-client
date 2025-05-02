import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const dialogCustomizations: Components<Theme> = {
  MuiDialog: {
    styleOverrides: {
      paper: {},
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
};
