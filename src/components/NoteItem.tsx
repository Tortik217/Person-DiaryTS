import type { INote } from "../types/INote";
import { useState } from "react";

interface NoteItemProps {
  note: INote;
  removeNote: (id: number) => void;
}

export const NoteItem = ({ note, removeNote }: NoteItemProps) => {
  const [isEditing, setEditing] = useState(false);
  const [textValue, setTextValue] = useState(note.text)

  const handlerEditValue = (text: string) => {
    note.text = text
    setEditing(false)
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body text-center">
        {isEditing && (
          <>
            <input
              type="text"
              className="card-text mb-3"
              value={textValue}
              onChange={e => setTextValue(e.target.value)}
            />
            <div className="action d-flex justify-content-around">
              <button
                className="btn btn-success"
                onClick={() => handlerEditValue(textValue)}
              >
                Accept
              </button>
              <button
                onClick={() => setEditing(false)}
                className="btn btn-danger"
              >
                Cancel
              </button>
            </div>
          </>
        )}
        {!isEditing && (
          <>
            <p className="card-text text-center">{note.text}</p>
            <div className="action d-flex justify-content-around">
              <button className="btn btn-success">Done</button>
              <button
                onClick={() => setEditing(true)}
                className="btn btn-primary"
              >
                Edit
              </button>
              <button
                onClick={() => removeNote(note.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
