import { Stack } from "@mui/material";
import { Editor } from "@tiptap/react";
import { StylingButtons } from "./StylingButtons";

export type MenuBarProps = {
  editor: Editor | null;
};

export const MenuBar = (props: MenuBarProps) => {
  const { editor } = props;

  if (!editor) return;

  return (
    <Stack direction="row" gap={1}>
      <StylingButtons editor={editor} />
    </Stack>
  );
};
