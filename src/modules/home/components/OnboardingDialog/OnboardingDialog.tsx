import { ColorPicker } from "@/modules/layout/components/Sidebar/AccountControls";
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

export type OnboardingDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OnboardingDialog = (props: OnboardingDialogProps) => {
  const { open, setOpen } = props;

  const [_localName, setLocalName] = useLocalStorage("name", "");
  const [name, setName] = useState("");

  const handleContinue = () => {
    setLocalName(name);
    setOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Welcome to Jot</DialogTitle>
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
          <ColorPicker />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleContinue}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};
