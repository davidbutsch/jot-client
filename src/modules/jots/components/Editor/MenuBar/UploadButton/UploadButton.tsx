import { Button, Icon } from "@mui/material";

export const UploadButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<Icon className="material-symbols-outlined">upload_file</Icon>}
      sx={{
        flexGrow: 1,
      }}
    >
      Upload
    </Button>
  );
};
