import { NoteItem } from "../../components/NoteItem";
import { useOutletCtx } from "../../hooks/index.ts";

export function ListPage() {
  const { notes, removeNote, editNote } = useOutletCtx();

  return (
    <div className="d-flex flex-wrap flex-column gap-3">
      <div className="date m-auto">
        <label>
          <input type="date" name="date" id="date" className="form-control" />
        </label>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} removeNote={removeNote} editNote={editNote}/>
        ))}
      </div>
    </div>
  );
}
