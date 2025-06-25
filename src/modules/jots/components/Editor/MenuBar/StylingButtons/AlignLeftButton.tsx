import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type AlignLeftButtonProps = {
  editor: Editor;
};

export const AlignLeftButton = (props: AlignLeftButtonProps) => {
  const { editor } = props;

  const handleEnableAlignLeft = () =>
    editor.chain().focus().toggleTextAlign("left").run();

  return (
    <RichTooltip titles={["Align Left", "Ctrl+Shift+L"]}>
      <IconButton
        size="small"
        onClick={handleEnableAlignLeft}
        sx={{
          ...(editor.isActive({ textAlign: "left" }) && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_align_left
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
