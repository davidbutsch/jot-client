import { ColorPicker } from "@/modules/layout/components/Sidebar/AccountControls";
import {
  Button,
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

export type AccountStepProps = {
  nextStep: () => any;
};

export const AccountStep = (props: AccountStepProps) => {
  const { nextStep } = props;

  const [color] = useLocalStorage("color", "");
  const [, setLocalName] = useLocalStorage("name", "");
  const [name, setName] = useState("");

  const disableContinue = !name || !color;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const handleContinue = () => {
    setLocalName(name);
    nextStep();
  };

  return (
    <>
      <DialogTitle>Account setup</DialogTitle>
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
        <Button
          variant="contained"
          disabled={disableContinue}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </DialogActions>
    </>
  );
};
