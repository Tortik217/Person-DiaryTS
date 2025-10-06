import type {INote} from "../types/INote"

export const NoteItem = () => {

  const notes: INote = {
    id: 1,
    text: 'Hello, World!',
    complited: false,
  }

  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <p className="card-text">
          {notes.text}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
