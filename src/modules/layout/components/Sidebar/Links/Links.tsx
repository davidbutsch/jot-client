import {
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Pinned } from "./Pinned";
import { Recents } from "./Recents";

export const Links = () => {
  return (
    <List component="nav">
      <ListItemButton>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">group</Icon>
        </ListItemIcon>
        <ListItemText primary="Shared" />
      </ListItemButton>
      <Recents />
      <Pinned />
    </List>
  );
};
