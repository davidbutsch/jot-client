import { createTheme, Shadows } from "@mui/material";
import {
  buttonCustomizations,
  dialogCustomizations,
  inputCustomizations,
  listCustomizations,
  menuCustomizations,
  miscCustomizations,
  typographyCustomizations,
} from "./customizations";
import { palette } from "./palette";

export const theme = createTheme({
  palette,
  shadows: Array(25).fill("none") as Shadows,
  shape: {
    borderRadius: 12,
  },
  components: {
    ...buttonCustomizations,
    ...inputCustomizations,
    ...menuCustomizations,
    ...miscCustomizations,
    ...dialogCustomizations,
    ...typographyCustomizations,
    ...listCustomizations,
  },
  typography: {
    fontFamily: [
      "Lexend",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
