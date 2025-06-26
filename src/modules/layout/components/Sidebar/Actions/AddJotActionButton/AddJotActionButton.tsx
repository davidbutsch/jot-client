import { Icon, ListItemIcon, ListItemText } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import { ActionButton } from "../ActionButton";
import { AddJotMenu } from "./AddJotMenu";

export const AddJotActionButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenMenu: MouseEventHandler<HTMLDivElement> = (event) =>
    setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <>
      <AddJotMenu anchorEl={anchorEl} handleClose={handleCloseMenu} />
      <ActionButton onClick={handleOpenMenu}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">add</Icon>
        </ListItemIcon>
        <ListItemText>Add Jot</ListItemText>
      </ActionButton>
    </>
  );
};
