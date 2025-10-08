import { useOutletContext } from "react-router-dom";
import { NoteItem } from "../../components/NoteItem";
import type { INote } from "../../types/INote";

interface OutletContext {
  notes: INote[];
}

export function EntriesListPage() {
  const { notes } = useOutletContext<OutletContext>();

  return (
    <div className="d-flex flex-wrap gap-3">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}
