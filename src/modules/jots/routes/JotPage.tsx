import { Editor, getJot } from "@/modules/jots";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const JotPage = () => {
  const { id: jotId } = useParams<{ id: string }>();

  if (!jotId) return;

  const getJotQuery = useQuery({
    queryKey: ["jot", jotId],
    queryFn: () => getJot(jotId),
  });

  const jot = getJotQuery.data;

  // Replace with loader
  if (!jot) return;

  return <Editor jot={jot} />;
};
