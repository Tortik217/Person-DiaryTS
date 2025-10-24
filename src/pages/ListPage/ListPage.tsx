import { useEffect, useState } from "react";
import { NoteItem } from "../../components/NoteItem";
import { useOutletCtx } from "../../hooks/index.ts";

export function ListPage() {
  const { notes, removeNote, editNote } = useOutletCtx();
  const [date, setDate] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    if (date) {
      setFilteredNotes(notes.filter((note) => note.date === date));
    } else {
      setFilteredNotes(notes);
    }
  }, [date, notes]);

  return (
    <div className="d-flex flex-wrap flex-column gap-3">
      <div className="date m-auto d-flex gap-2">
        <label className="label">
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
        <button
          type="button"
          onClick={() => setDate("")}
          className="btn btn-warning"
        >
          Reset Date
        </button>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              removeNote={removeNote}
              editNote={editNote}
            />
          ))
        ) : (
          <p className="text-muted fs-5 mt-4">📭 Нет записей для отображения</p>
        )}
      </div>
    </div>
  );
}
