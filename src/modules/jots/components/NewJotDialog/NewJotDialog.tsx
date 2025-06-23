import { createJot } from "@/modules/jots/api";
import { useSavedJotIds } from "@/modules/jots/hooks";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type NewJotDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NewJotDialog = (props: NewJotDialogProps) => {
  const { open, setOpen } = props;

  const navigate = useNavigate();

  // State
  const [title, setTitle] = useState("");
  const { addJotId } = useSavedJotIds();

  // Api
  const createJotMutation = useMutation({
    mutationFn: createJot,
  });
  const isLoading = createJotMutation.isPending;

  // State changes
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  // Dialog actions
  const handleDialogClose = () => setOpen(false);
  const handleCreateJot = async () => {
    // Create new jot
    const newJot = await createJotMutation.mutateAsync({ title });

    // Save jot to local home
    addJotId("home", newJot.id);

    // Close dialog
    setOpen(false);

    // Navigate to Jot page
    navigate(`/${newJot.id}`);
  };

  return (
    <Dialog open={open} onClose={handleDialogClose}>
      <DialogTitle>New Jot</DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <DialogContentText>
            Create a new Jot for easy note and file sharing.
          </DialogContentText>
          <FormControl>
            <FormLabel htmlFor="name" required>
              Title
            </FormLabel>
            <TextField
              value={title}
              onChange={handleTitleChange}
              id="name"
              type="text"
              name="name"
              placeholder=""
              autoComplete="none"
              required
              fullWidth
              autoFocus
              variant="outlined"
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleCreateJot}
          loading={isLoading}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
