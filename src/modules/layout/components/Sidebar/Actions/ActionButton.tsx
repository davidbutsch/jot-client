import { ListItemButton, styled } from "@mui/material";

export const ActionButton = styled(ListItemButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  "*": {
    // Set text and icon color
    color: theme.palette.primary.contrastText,
  },

  ":hover": {
    background: theme.palette.primary.main,
  },
}));
