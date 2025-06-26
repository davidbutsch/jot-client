import { AddSharedJotDialog } from "@/modules/jots/components";
import { Icon, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";

export const AddSharedJotMenuItem = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);

  return (
    <>
      <AddSharedJotDialog open={dialogOpen} setOpen={setDialogOpen} />
      <MenuItem onClick={handleOpenDialog}>
        <ListItemIcon>
          <Icon className="material-symbols-outlined">group</Icon>
        </ListItemIcon>
        <ListItemText>Add shared</ListItemText>
      </MenuItem>
    </>
  );
};
