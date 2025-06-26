import { NewJotDialog } from "@/modules/jots/components";
import { Icon, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";

export const CreateNewJotMenuItem = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);

  return (
    <>
      <NewJotDialog open={dialogOpen} setOpen={setDialogOpen} />
      <MenuItem onClick={handleOpenDialog}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">note_stack_add</Icon>
        </ListItemIcon>
        <ListItemText>Create new</ListItemText>
      </MenuItem>
    </>
  );
};
