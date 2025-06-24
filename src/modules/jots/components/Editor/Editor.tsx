import { useCollaborativeEditor } from "@/modules/jots/hooks";
import { Jot } from "@/modules/jots/types";
import { EditorContent } from "@tiptap/react";
import useLocalStorage from "use-local-storage";
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

  return (
    <>
      <TitleInput jot={jot} />
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>Float</FloatingMenu>
      <BubbleMenu editor={editor}>Bubble</BubbleMenu> */}
    </>
  );
};
