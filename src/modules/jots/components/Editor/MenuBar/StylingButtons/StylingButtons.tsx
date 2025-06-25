import { Divider, Paper, Stack } from "@mui/material";
import { Editor } from "@tiptap/react";
import { AlignCenterButton } from "./AlignCenterButton";
import { AlignJustifyButton } from "./AlignJustifyButton";
import { AlignLeftButton } from "./AlignLeftButton";
import { AlignRightButton } from "./AlignRightButton";
import { BlockquoteButton } from "./BlockquoteButton";
import { BoldButton } from "./BoldButton";
import { CodeBlockButton } from "./CodeBlockButton";
import { CodeButton } from "./CodeButton";
import { HeadingButton } from "./HeadingButton";
import { HighlightButton } from "./HighlightButton";
import { ItalicButton } from "./ItalicButton";
import { LinkButton } from "./LinkButton";
import { ListButton } from "./ListButton";
import { StrikeButton } from "./StrikeButton";
import { UnderlineButton } from "./UnderlineButton";

export type StylingButtonsProps = {
  editor: Editor;
};

export const StylingButtons = (props: StylingButtonsProps) => {
  const { editor } = props;

  if (!editor) return;

  return (
    <Paper variant="outlined" sx={{ px: 2, height: 48, width: "fit-content" }}>
      <Stack
        direction="row"
        sx={{
          height: "100%",
          alignItems: "center",
          gap: 1 / 2,
        }}
      >
        <HeadingButton editor={editor} />
        <BlockquoteButton editor={editor} />
        <CodeBlockButton editor={editor} />
        <ListButton editor={editor} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1,
          }}
        />
        <AlignLeftButton editor={editor} />
        <AlignCenterButton editor={editor} />
        <AlignRightButton editor={editor} />
        <AlignJustifyButton editor={editor} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1,
          }}
        />
        <BoldButton editor={editor} />
        <ItalicButton editor={editor} />
        <StrikeButton editor={editor} />
        <CodeButton editor={editor} />
        <UnderlineButton editor={editor} />
        <HighlightButton editor={editor} />
        <LinkButton editor={editor} />
      </Stack>
    </Paper>
  );
};
