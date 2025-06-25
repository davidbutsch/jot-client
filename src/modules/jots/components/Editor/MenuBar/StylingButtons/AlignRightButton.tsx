import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type AlignRightButtonProps = {
  editor: Editor;
};

export const AlignRightButton = (props: AlignRightButtonProps) => {
  const { editor } = props;

  const handleEnableAlignRight = () =>
    editor.chain().focus().toggleTextAlign("right").run();

  return (
    <RichTooltip titles={["Align Right", "Ctrl+Shift+R"]}>
      <IconButton
        size="small"
        onClick={handleEnableAlignRight}
        sx={{
          ...(editor.isActive({ textAlign: "right" }) && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_align_right
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
