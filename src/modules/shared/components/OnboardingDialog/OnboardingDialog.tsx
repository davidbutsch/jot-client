import { Dialog } from "@mui/material";
import { useState } from "react";
import { AccountStep } from "./AccountStep";
import { WelcomeStep } from "./WelcomeStep";

export type OnboardingDialogProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OnboardingDialog = (props: OnboardingDialogProps) => {
  const { open, setOpen } = props;

  const [step, setStep] = useState(0);

  // Iterate steps and close dialog on last step
  const nextStep = () => {
    if (step == 1) setOpen(false);
    else setStep((prev) => prev + 1);
  };

  return (
    <Dialog open={open}>
      {step == 0 && <WelcomeStep nextStep={nextStep} />}
      {step == 1 && <AccountStep nextStep={nextStep} />}
    </Dialog>
  );
};
