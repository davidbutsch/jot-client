import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type BoldButtonProps = {
  editor: Editor;
};

export const BoldButton = (props: BoldButtonProps) => {
  const { editor } = props;

  const handleEnableBold = () => editor.chain().focus().toggleBold().run();

  return (
    <RichTooltip titles={["Bold", "Ctrl+B"]}>
      <IconButton
        size="small"
        onClick={handleEnableBold}
        sx={{
          ...(editor.isActive("bold") && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_bold
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
