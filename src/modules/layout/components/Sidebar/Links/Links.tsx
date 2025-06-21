import { List } from "@mui/material";
import { Home } from "./Home";
import { Pinned } from "./Pinned";
import { Published } from "./Published";
import { Recents } from "./Recents";
import { Shared } from "./Shared";

export const Links = () => {
  return (
    <List component="nav">
      <Home />
      <Shared />
      <Published />
      <Pinned />
      <Recents />
    </List>
  );
};
