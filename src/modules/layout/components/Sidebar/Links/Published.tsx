import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const Published = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Icon className="material-symbols-outlined" color="primary">
          web
        </Icon>
      </ListItemIcon>
      <ListItemText primary="Published" />
    </ListItemButton>
  );
};
