import { BANNER_IMAGE_URL } from "@/common";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export type WelcomeStepProps = {
  nextStep: () => any;
};

export const WelcomeStep = (props: WelcomeStepProps) => {
  const { nextStep } = props;

  const handleContinue = () => {
    nextStep();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${BANNER_IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <DialogTitle
        fontWeight="bold !important"
        sx={{
          typography: { xs: "h5", sm: "h4", md: "h3" },
        }}
      >
        Jot: The minimalist solution for collaborative note taking.
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{
            typography: { xs: "subtitle2", md: "subtitle1" },
            mb: 5,
          }}
          mb={5}
        >
          Developed by David Butsch (2025 — current)
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleContinue}>
          Continue
        </Button>
      </DialogActions>
    </Box>
  );
};
