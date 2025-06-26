import { OnboardingDialog } from "@/modules/home";
import { JotCollection, useSavedJotIds } from "@/modules/jots";
import { Container, Typography } from "@mui/material";
import { useState } from "react";
import useLocalStorage from "use-local-storage";

export const SharedPage = () => {
  const [name] = useLocalStorage("name", "");
  const [open, setOpen] = useState(!name);

  const {
    savedJotIds: { shared },
  } = useSavedJotIds();

  if (!name) return <OnboardingDialog open={open} setOpen={setOpen} />;

  return (
    <Container>
      <Typography fontWeight="bold" variant="h4" my={4} height={40}>
        Shared
      </Typography>
      <JotCollection jotIds={shared} category="shared" />
    </Container>
  );
};
