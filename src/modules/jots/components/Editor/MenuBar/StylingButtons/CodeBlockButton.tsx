import { RichTooltip } from "@/common/components";
import { theme } from "@/theme";
import { Icon, IconButton } from "@mui/material";
import { Editor } from "@tiptap/react";

export type CodeBlockButtonProps = {
  editor: Editor;
};

export const CodeBlockButton = (props: CodeBlockButtonProps) => {
  const { editor } = props;

  const handleEnableCodeBlock = () =>
    editor.chain().focus().toggleCodeBlock().run();

  return (
    <RichTooltip titles={["Code block", "Ctrl+Alt+C"]}>
      <IconButton
        size="small"
        onClick={handleEnableCodeBlock}
        sx={{
          ...(editor.isActive("codeBlock") && {
            background: theme.palette.action.selected,
          }),
        }}
      >
        <Icon fontSize="small" className="material-symbols-outlined">
          code_blocks
        </Icon>
      </IconButton>
    </RichTooltip>
  );
};
