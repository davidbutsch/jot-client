import { Jot } from "@/modules/jots/types";
import { Stack } from "@mui/material";
import { Editor } from "@tiptap/react";
import { PublishButton } from "./PublishButton";
import { ShareButton } from "./ShareButton";
import { StylingButtons } from "./StylingButtons";
import { UploadButton } from "./UploadButton";

export type MenuBarProps = {
  editor: Editor | null;
  jot: Jot;
};

export const MenuBar = (props: MenuBarProps) => {
  const { editor, jot } = props;

  if (!editor) return;

  return (
    <Stack direction="row" gap={1}>
      <StylingButtons editor={editor} />
      <PublishButton />
      <UploadButton editor={editor} />
      <ShareButton jot={jot} />
    </Stack>
  );
};
