import { Editor, getJot, useSavedJotIds } from "@/modules/jots";
import { Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const JotPage = () => {
  const { id: jotId } = useParams<{ id: string }>();

  if (!jotId) return;

  const getJotQuery = useQuery({
    queryKey: ["jots", jotId],
    queryFn: () => getJot(jotId),
  });

  const jot = getJotQuery.data;

  const { addJotId } = useSavedJotIds();

  // Insert new recent jot
  useEffect(() => {
    if (jotId) addJotId("recents", jotId, { maxLength: 5 });
  }, [jotId]);

  // Replace with loader
  if (!jot) return;

  return (
    <Container>
      <Editor jot={jot} />
    </Container>
  );
};
