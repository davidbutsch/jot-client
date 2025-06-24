import { env } from "@/common";
import { Jot } from "@/modules/jots/types";
import { HocuspocusProvider } from "@hocuspocus/provider";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import debounce from "lodash.debounce";
import { useMemo, useRef } from "react";
import * as Y from "yjs";
import { updateJot } from "../api";

type useCollaborativeEditorOptions = {
  jot: Jot;
  user: { name: string; color: string };
};

export function useCollaborativeEditor({
  jot,
  user,
}: useCollaborativeEditorOptions) {
  const ydocRef = useRef(new Y.Doc());
  const providerRef = useRef<HocuspocusProvider>(
    new HocuspocusProvider({
      url: env.WS_URL,
      name: jot.id,
      document: ydocRef.current,
    })
  );

  // Track first debounce update
  const hasInitialized = useRef(false);

  const handleDebouncedUpdate = useMemo(
    () =>
      debounce(({ editor }) => {
        // Don't update jot on initial update
        if (!hasInitialized.current) return (hasInitialized.current = true);

        const html = editor.getHTML();
        updateJot(jot.id, { html });
      }, 1000),
    []
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      Collaboration.configure({
        document: ydocRef.current,
      }),
      CollaborationCursor.configure({
        provider: providerRef.current,
        user,
      }),
    ],
    onUpdate: handleDebouncedUpdate,
  });

  return editor;
}
