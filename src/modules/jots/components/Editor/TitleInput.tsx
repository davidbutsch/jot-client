import { updateJot } from "@/modules/jots/api";
import { Jot } from "@/modules/jots/types";
import { TextField } from "@mui/material";
import { useState } from "react";

export type TitleInputProps = {
  jot: Jot;
};

export const TitleInput = (props: TitleInputProps) => {
  const { jot } = props;

  const [title, setTitle] = useState(jot.title);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // On enter, call persistToStore()
    if (event.key === "Enter") persistToStore();
  };

  const persistToStore = async () => {
    const updatedJot = await updateJot(jot.id, { title });

    setTitle(updatedJot.title);
  };

  return (
    <TextField
      variant="standard"
      value={title}
      onChange={handleTitleChange}
      onBlur={persistToStore}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          sx: {
            typography: "h4",
            fontWeight: "bold !important",
            my: 4,
            height: 40,
          },
          disableUnderline: true,
        },
      }}
    />
  );
};
