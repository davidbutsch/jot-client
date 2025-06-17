import {
  Icon,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const Home = () => {
  return (
    <ListItemButton selected>
      <ListItemIcon>
        <Icon className="material-symbols-outlined" color="primary">
          home
        </Icon>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
  );
};
