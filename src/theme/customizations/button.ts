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
        textTransform: "none",

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
            style: {},
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
      root: {
        borderRadius: 12,
      },
    },
  },
};
