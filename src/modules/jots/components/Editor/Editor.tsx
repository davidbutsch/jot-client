import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useMemo } from "react";
import useLocalStorage from "use-local-storage";
import { WebrtcProvider } from "y-webrtc";
import * as Y from "yjs";

export type EditorProps = {
  jotId: string;
};

export const Editor = (props: EditorProps) => {
  const { jotId } = props;

  // Local account details
  const [name] = useLocalStorage("name", "");
  const [color] = useLocalStorage("color", "#3b82f6");

  const yDoc = useMemo(() => new Y.Doc(), [jotId]);
  const provider = useMemo(() => new WebrtcProvider(jotId, yDoc), [jotId]);

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
