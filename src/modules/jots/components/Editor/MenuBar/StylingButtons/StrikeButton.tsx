import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type StrikeButtonProps = {
  editor: Editor;
};

export const StrikeButton = (props: StrikeButtonProps) => {
  const { editor } = props;

  const handleEnableStrike = () => editor.chain().focus().toggleStrike().run();

  return (
    <RichTooltip titles={["Strike", "Ctrl+Shif+S"]}>
      <IconButton
        size="small"
        onClick={handleEnableStrike}
        sx={{
          ...(editor.isActive("strike") && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          format_strikethrough
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
