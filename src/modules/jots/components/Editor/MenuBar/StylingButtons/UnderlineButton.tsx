import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type UnderlineButtonProps = {
  editor: Editor;
};

export const UnderlineButton = (props: UnderlineButtonProps) => {
  const { editor } = props;

  const handleEnableUnderline = () =>
    editor.chain().focus().toggleUnderline().run();

  return (
    <RichTooltip titles={["Underline", "Ctrl+U"]}>
      <IconButton
        size="small"
        onClick={handleEnableUnderline}
        sx={{
          ...(editor.isActive("underline") && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_underlined
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
