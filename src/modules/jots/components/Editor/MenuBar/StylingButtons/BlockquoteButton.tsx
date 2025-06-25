import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type BlockquoteButtonProps = {
  editor: Editor;
};

export const BlockquoteButton = (props: BlockquoteButtonProps) => {
  const { editor } = props;

  const handleEnableBlockquote = () =>
    editor.chain().focus().toggleBlockquote().run();

  return (
    <RichTooltip titles={["Blockquote", "Ctrl+Shift+B"]}>
      <IconButton
        size="small"
        onClick={handleEnableBlockquote}
        sx={{
          ...(editor.isActive("blockquote") && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_quote
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
