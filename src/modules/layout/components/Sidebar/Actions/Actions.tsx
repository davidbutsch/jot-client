import { List } from "@mui/material";
import { NewJotActionButton } from "./NewJotActionButton";

export const Actions = () => {
  return (
    <List
      sx={{
        // Disable vertical padding to align with page contents
        py: 0,
      }}
    >
      <NewJotActionButton />
    </List>
  );
};
