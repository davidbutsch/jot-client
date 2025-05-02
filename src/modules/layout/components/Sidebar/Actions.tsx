import {
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

const ActionButton = styled(ListItemButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  "*": {
    // set text and icon color
    color: theme.palette.primary.contrastText,
  },

  ":hover": {
    background: theme.palette.primary.main,
  },
}));

export const Actions = () => {
  return (
    <List>
      <ActionButton>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">add</Icon>
        </ListItemIcon>
        <ListItemText sx={{ "*": { fontWeight: "bold !important" } }}>
          New Jot
        </ListItemText>
      </ActionButton>
    </List>
  );
};
