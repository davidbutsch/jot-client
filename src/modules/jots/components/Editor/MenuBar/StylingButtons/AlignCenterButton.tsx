import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type AlignCenterButtonProps = {
  editor: Editor;
};

export const AlignCenterButton = (props: AlignCenterButtonProps) => {
  const { editor } = props;

  const handleEnableAlignLeft = () =>
    editor.chain().focus().toggleTextAlign("center").run();

  return (
    <RichTooltip titles={["Align Center", "Ctrl+Shift+E"]}>
      <IconButton
        size="small"
        onClick={handleEnableAlignLeft}
        sx={{
          ...(editor.isActive({ textAlign: "center" }) && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_align_center
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
