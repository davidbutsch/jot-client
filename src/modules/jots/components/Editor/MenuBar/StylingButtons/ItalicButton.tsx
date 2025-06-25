import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type ItalicButtonProps = {
  editor: Editor;
};

export const ItalicButton = (props: ItalicButtonProps) => {
  const { editor } = props;

  const handleEnableItalic = () => editor.chain().focus().toggleItalic().run();

  return (
    <RichTooltip titles={["Italic", "Ctrl+I"]}>
      <IconButton
        size="small"
        onClick={handleEnableItalic}
        sx={{
          ...(editor.isActive("italic") && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_italic
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
