import { type Jot } from "@/modules/jots";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useMemo } from "react";
import useLocalStorage from "use-local-storage";
import { WebrtcProvider } from "y-webrtc";
import * as Y from "yjs";

export type DocumentEditorProps = {
  jot: Jot;
};

export const DocumentEditor = (props: DocumentEditorProps) => {
  const { jot } = props;

  // Local account details
  const [name] = useLocalStorage("name", "");
  const [color] = useLocalStorage("color", "#3b82f6");

  const yDoc = useMemo(() => new Y.Doc(), [jot.id]);
  const provider = useMemo(() => new WebrtcProvider(jot.id, yDoc), [jot.id]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: yDoc,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name,
          color,
        },
      }),
    ],
  });

  useEffect(() => {
    if (editor) editor.commands.setContent(jot.content);

    return () => {
      provider.destroy();
      yDoc.destroy();
    };
  }, [provider, yDoc]);

  return (
    <>
      <EditorContent
        editor={editor}
        style={{
          height: "100vh",
        }}
      />
      {/* <FloatingMenu editor={editor}>Float</FloatingMenu>
      <BubbleMenu editor={editor}>Bubble</BubbleMenu> */}
    </>
  );
};
