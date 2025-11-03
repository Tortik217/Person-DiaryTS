import type { INote } from "../types/INote";
import {useEffect, useRef, useState} from "react";

interface NoteItemProps {
  note: INote;
  removeNote: (id: number) => void;
  editNote: (id: string, newText: string) => void
}

export const NoteItem = ({ note, removeNote, editNote }: NoteItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>(note.text)
  const inputRef = useRef<HTMLInputElement>(null);

  const onEdit = () => {
    editNote(note.id, textValue)
    setIsEditing(false)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

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
              ref={inputRef}
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
