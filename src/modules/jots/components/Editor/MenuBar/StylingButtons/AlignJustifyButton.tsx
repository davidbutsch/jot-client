import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type AlignJustifyButtonProps = {
  editor: Editor;
};

export const AlignJustifyButton = (props: AlignJustifyButtonProps) => {
  const { editor } = props;

  const handleEnableAlignJustify = () =>
    editor.chain().focus().toggleTextAlign("justify").run();

  return (
    <RichTooltip titles={["Align Center", "Ctrl+Shift+J"]}>
      <IconButton
        size="small"
        onClick={handleEnableAlignJustify}
        sx={{
          ...(editor.isActive({ textAlign: "justify" }) && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_align_justify
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
