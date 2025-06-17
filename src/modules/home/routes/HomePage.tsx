import { OnboardingDialog } from "@/modules/home";
import { Container } from "@mui/material";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export const HomePage = () => {
  const [name] = useLocalStorage("name", "");

  const [open, setOpen] = useState(!name);

  return (
    <Container>
      <OnboardingDialog open={open} setOpen={setOpen} />
    </Container>
  );
};
