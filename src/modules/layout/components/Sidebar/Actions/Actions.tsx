import { List } from "@mui/material";
import { AddJotActionButton } from "./AddJotActionButton";

export const Actions = () => {
  return (
    <List
      sx={{
        // Disable vertical padding to align with page contents
        py: 0,
      }}
    >
      <AddJotActionButton />
    </List>
  );
};
