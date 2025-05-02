import { Components, Theme } from "@mui/material";

export const buttonCustomizations: Components<Theme> = {
  // BUTTON
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        flex: "none", // fix text wrapping issue
        fontWeight: 600, // all buttons have bold text

        variants: [
          // CONTAINED VARIANT
          {
            props: { variant: "contained" },
            style: {},
          },
          {
            props: { disabled: true },
            style: {},
          },
          // TEXT VARIANT
          {
            props: { variant: "text" },
            style: {
              "&:hover": {
                background: "transparent",
                textDecoration: "underline",
                textDecorationThickness: "2px",
              },
            },
          },
          // LARGE SIZE
          {
            props: { size: "large" },
            style: {
              fontSize: 18,
            },
          },
          // MEDIUM SIZE
          {
            props: { size: "medium" },
            style: {},
          },
          // SMALL SIZE
          {
            props: { size: "small" },
            style: {},
          },
        ],
      },
    },
  },
  // ICON BUTTON
  MuiIconButton: {
    styleOverrides: {
      root: {},
    },
  },
};
