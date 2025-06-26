import { useCollaborativeEditor } from "@/modules/jots/hooks";
import { Jot } from "@/modules/jots/types";
import { Stack } from "@mui/material";
import { EditorContent } from "@tiptap/react";
import useLocalStorage from "use-local-storage";
import { MenuBar } from "./MenuBar";
import { TitleInput } from "./TitleInput";

export type EditorProps = {
  jot: Jot;
};

export const Editor = (props: EditorProps) => {
  const { jot } = props;

  // Local account details
  const [name] = useLocalStorage("name", "");
  const [color] = useLocalStorage("color", "#3b82f6");

  const editor = useCollaborativeEditor({
    jot,
    user: { name, color },
  });

  if (!editor) return;

  return (
    <Stack className="editor-container">
      <TitleInput jot={jot} />
      <MenuBar editor={editor} jot={jot} />
      <EditorContent
        style={{
          marginTop: 32,
        }}
        editor={editor}
      />
    </Stack>
  );
};

{
  /* <FloatingMenu editor={editor}>Float</FloatingMenu>
      <BubbleMenu editor={editor}>Bubble</BubbleMenu> */
}
