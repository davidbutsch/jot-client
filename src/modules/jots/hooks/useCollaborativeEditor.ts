import { env } from "@/common";
import { updateJot } from "@/modules/jots/api";
import { handleUpload } from "@/modules/jots/helpers";
import { Jot } from "@/modules/jots/types";
import { HocuspocusProvider } from "@hocuspocus/provider";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import debounce from "lodash.debounce";
import { useMemo } from "react";
import * as Y from "yjs";

import { Blockquote } from "@tiptap/extension-blockquote";
import { FileHandler } from "@tiptap/extension-file-handler";
import { Heading } from "@tiptap/extension-heading";
import { Highlight } from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";
import { ResizableImage } from "tiptap-extension-resizable-image";

import { FileNode } from "@/modules/jots/extensions";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

type useCollaborativeEditorOptions = {
  jot: Jot;
  user: { name: string; color: string };
};

// TODO: Fix issue with editor not refreshing data on jot state change
export function useCollaborativeEditor(props: useCollaborativeEditorOptions) {
  const { jot, user } = props;

  const ydoc = useMemo(() => new Y.Doc(), [jot]);
  const provider = useMemo(
    () =>
      new HocuspocusProvider({
        url: env.WS_URL,
        name: jot.id,
        document: ydoc,
      }),
    [jot]
  );

  const handleDebouncedUpdate = useMemo(
    () =>
      debounce(({ editor }) => {
        const html = editor.getHTML();
        updateJot(jot.id, { html });
      }, 1000),
    [jot]
  );

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
        codeBlock: false,
        heading: false,
        blockquote: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start writing...",
      }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Blockquote,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "javascript",
      }),
      Link.configure({
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
      }),
      ResizableImage.configure({
        minWidth: 32,
        minHeight: 32,
        maxWidth: 622,
      }),
      FileHandler.configure({
        onPaste: handleUpload,
        onDrop: handleUpload,
      }),
      FileNode,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: provider,
        user,
      }),
    ],
    onUpdate: handleDebouncedUpdate,
  });

  return editor;
}
