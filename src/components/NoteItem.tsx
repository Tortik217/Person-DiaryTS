import type { INote } from "../types/INote";

interface NoteItemProps {
  note: INote;
}

export const NoteItem = ({ note }: NoteItemProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text text-center">{note.text}</p>
        <div className="action">
          <a href="#" className="btn btn-primary">
            Edit
          </a>
          <a href="#" className="btn btn-warning">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};
