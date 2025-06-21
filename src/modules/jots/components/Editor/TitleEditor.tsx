import { Jot } from "@/modules/jots";
import Collaboration from "@tiptap/extension-collaboration";
import Document from "@tiptap/extension-document";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect, useMemo } from "react";
import { WebrtcProvider } from "y-webrtc";
import * as Y from "yjs";

export type TitleEditorProps = {
  jot: Jot;
};

export const TitleEditor = (props: TitleEditorProps) => {
  const { jot } = props;

  const yDoc = useMemo(() => new Y.Doc(), [jot.id]);
  const provider = useMemo(
    () => new WebrtcProvider(`${jot.id}-title`, yDoc),
    [jot.id]
  );

  const titleEditor = useEditor({
    extensions: [
      Document,
      Text,
      Heading.configure({ levels: [1] }),
      Collaboration.configure({
        document: yDoc,
      }),
    ],
  });

  useEffect(() => {
    console.log(jot.title);
    if (titleEditor) titleEditor.commands.setContent(jot.title);

    return () => {
      provider.destroy();
      yDoc.destroy();
    };
  }, [provider, yDoc]);

  return <EditorContent editor={titleEditor} />;
};
