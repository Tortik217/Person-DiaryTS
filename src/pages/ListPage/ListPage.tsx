import { useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { useOutletCtx } from "../../hooks/index.ts";

export function ListPage() {
  const { notes, removeNote, editNote } = useOutletCtx();
  const [date, setDate] = useState("");
  const filteredNotes = date
    ? notes.filter((note) => note.date === date)
    : notes;

  return (
    <div className="d-flex flex-wrap flex-column gap-3">
      <div className="date m-auto d-flex gap-2">
        <label className="label">
          {" "}
          Поиск по датам
          <input
            type="date"
            name="date"
            id="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => setDate('')} className="btn btn-warning">Reset Date</button>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            removeNote={removeNote}
            editNote={editNote}
          />
        ))}
      </div>
    </div>
  );
}
