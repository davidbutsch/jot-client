import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type CodeButtonProps = {
  editor: Editor;
};

export const CodeButton = (props: CodeButtonProps) => {
  const { editor } = props;

  const handleEnableCode = () => editor.chain().focus().toggleCode().run();

  return (
    <RichTooltip titles={["Code", "Ctrl+E"]}>
      <IconButton
        size="small"
        onClick={handleEnableCode}
        sx={{
          ...(editor.isActive("code") && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          code
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
