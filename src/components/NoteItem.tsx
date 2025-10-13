import type { INote } from "../types/INote";

interface NoteItemProps {
  note: INote;
  removeNote: (id: number) => void;
}

export const NoteItem = ({ note, removeNote }: NoteItemProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text text-center">{note.text}</p>
        <div className="action d-flex justify-content-around">
          <button className="btn btn-success">
            Done
          </button>
          <button className="btn btn-primary">
            Edit
          </button>
          <button onClick={() => removeNote(note.id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
