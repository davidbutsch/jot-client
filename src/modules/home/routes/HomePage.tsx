import { OnboardingDialog } from "@/modules/home";
import { JotCollection, useSavedJotIds } from "@/modules/jots";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export const HomePage = () => {
  const [name] = useLocalStorage("name", "");
  const [open, setOpen] = useState(!name);

  const {
    savedJotIds: { home },
  } = useSavedJotIds();

  if (!name) return <OnboardingDialog open={open} setOpen={setOpen} />;

  return (
    <Container>
      <Typography fontWeight="bold" variant="h4" my={4} height={40}>
        Home
      </Typography>
      <JotCollection jotIds={home} />
    </Container>
  );
};
