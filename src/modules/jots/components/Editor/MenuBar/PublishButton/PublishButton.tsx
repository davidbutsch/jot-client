import { Button, Icon } from "@mui/material";

export const PublishButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<Icon className="material-symbols-outlined">web</Icon>}
      sx={{
        flexGrow: 1,
      }}
    >
      Publish
    </Button>
  );
};
