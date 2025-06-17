import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const Shared = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Icon className="material-symbols-outlined" color="primary">
          group
        </Icon>
      </ListItemIcon>
      <ListItemText primary="Shared" />
    </ListItemButton>
  );
};
