import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const typographyCustomizations: Components<Theme> = {
  MuiTypography: {
    styleOverrides: {
      root: {
        variants: [
          // H1
          {
            props: { variant: "h1" },
            style: {},
          },
          // H2
          {
            props: { variant: "h2" },
            style: {},
          },
          // H3
          {
            props: { variant: "h3" },
            style: {},
          },
          // H4
          {
            props: { variant: "h4" },
            style: {},
          },
        ],
      },
    },
  },
};
