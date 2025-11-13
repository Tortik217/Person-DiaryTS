import type {INote} from "../../types/INote";
import {useEffect, useRef, useState} from "react";

interface NoteItemProps {
  note: INote;
  removeNote: (id: string) => void;
  editNote: (id: string, newText: string) => void
  toggleCompleted: (id: string) => void;
}

export const NoteItem = ({note, removeNote, editNote, toggleCompleted}: NoteItemProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [textValue, setTextValue] = useState<string>(note.text)
  const inputRef = useRef<HTMLInputElement>(null);

  const onEdit = () => {
    const trimmed = textValue.trim();
    if (trimmed !== note.text) editNote(note.id, trimmed);
    setIsEditing(false);
  };

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  const cardClasses = `card ${note.completed ? "border-success bg-light" : ""}`;
  const textClasses = `card-text text-center ${note.completed ? "text-muted text-decoration-line-through" : ""}`;

  return (
      <div className={cardClasses} style={{width: "18rem"}}>
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
                <p className={textClasses}>{note.text}</p>
                <div className="action d-flex justify-content-around">
                  <button
                      onClick={() => toggleCompleted(note.id)}
                      aria-pressed={note.completed}
                      className={`btn ${note.completed ? "btn-outline-success" : "btn-success"}`}
                  >
                    {note.completed ? "Undone" : "Done"}
                  </button>
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
