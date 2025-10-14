import { NoteItem } from "../../components/NoteItem";
import { useOutletCtx } from '../../hooks/index.ts'

export function ListPage() {
  const { notes, removeNote, editNote } = useOutletCtx();

  return (
    <div className="d-flex flex-wrap gap-3">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} removeNote={removeNote} editNote={editNote}/>
      ))}
    </div>
  );
}
