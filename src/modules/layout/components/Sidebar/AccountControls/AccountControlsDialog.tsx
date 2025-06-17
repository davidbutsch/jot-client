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
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export type AccountControlsDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AccountControlsDialog = (props: AccountControlsDialogProps) => {
  const { open, setOpen } = props;

  const [localName, setLocalName] = useLocalStorage("name", "");
  const [name, setName] = useState(localName);

  // Input changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  // Dialog actions
  const handleCancel = () => setOpen(false);
  const handleSave = () => {
    setLocalName(name);
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Account Controls</DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <DialogContentText>
            Please enter a display name that others can easily identify you by.
          </DialogContentText>
          <FormControl>
            <FormLabel htmlFor="name" required>
              Name
            </FormLabel>
            <TextField
              value={name}
              onChange={handleNameChange}
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              autoComplete="name"
              required
              fullWidth
              autoFocus
              variant="outlined"
            />
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" type="submit" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
