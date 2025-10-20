import type { INote } from "../types/INote";
import { useState } from "react";

interface NoteItemProps {
  note: INote;
  removeNote: (id: number) => void;
  editNote: (id: number, newText: string) => void
}

export const NoteItem = ({ note, removeNote, editNote }: NoteItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState(note.text)

  const onEdit = () => {
    editNote(note.id, textValue)
    setIsEditing(false)
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
                onClick={() => onEdit()}
              >
                Accept
              </button>
              <button
                onClick={() => setIsEditing(false)}
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
                onClick={() => setIsEditing(true)}
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
