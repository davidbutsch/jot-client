import { List } from "@mui/material";
import { Home } from "./Home";
import { Pinned } from "./Pinned";
import { Recents } from "./Recents";
import { Shared } from "./Shared";

export const Links = () => {
  return (
    <List component="nav">
      <Home />
      <Shared />
      <Pinned />
      <Recents />
    </List>
  );
};
