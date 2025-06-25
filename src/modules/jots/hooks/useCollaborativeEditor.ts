import { env } from "@/common";
import { updateJot } from "@/modules/jots/api";
import { Jot } from "@/modules/jots/types";
import { HocuspocusProvider } from "@hocuspocus/provider";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import debounce from "lodash.debounce";
import { useMemo, useRef } from "react";
import * as Y from "yjs";

import { Blockquote } from "@tiptap/extension-blockquote";
import { Heading } from "@tiptap/extension-heading";
import { Highlight } from "@tiptap/extension-highlight";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Underline } from "@tiptap/extension-underline";

import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

type useCollaborativeEditorOptions = {
  jot: Jot;
  user: { name: string; color: string };
};

export function useCollaborativeEditor({
  jot,
  user,
}: useCollaborativeEditorOptions) {
  const ydocRef = useRef(new Y.Doc());
  const provider = useMemo(
    () =>
      new HocuspocusProvider({
        url: env.WS_URL,
        name: jot.id,
        document: ydocRef.current,
      }),
    []
  );

  const handleDebouncedUpdate = useMemo(
    () =>
      debounce(({ editor }) => {
        const html = editor.getHTML();
        updateJot(jot.id, { html });
      }, 1000),
    []
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
      Collaboration.configure({
        document: ydocRef.current,
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
