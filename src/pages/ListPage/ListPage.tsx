import {useState} from "react";
import {NoteItem} from "../../components/NoteItem/NoteItem";
import {useOutletCtx} from "../../hooks";

export function ListPage() {
  const {notes, removeNote, editNote, toggleCompleted} = useOutletCtx();
  const [inputDate, setInputDate] = useState<string>("");

  const filteredNotes = inputDate ? notes.filter((note) => note.date === inputDate) : notes

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
                value={inputDate}
                onChange={(e) => setInputDate(e.target.value)}
            />
          </label>
          <button
              type="button"
              onClick={() => setInputDate("")}
              className="btn btn-warning"
              disabled={!inputDate}
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
                      toggleCompleted={toggleCompleted}
                  />
              ))
          ) : (
              <p className="text-muted fs-5 mt-4">📭 Нет записей для отображения</p>
          )}
        </div>
      </div>
  );
}
