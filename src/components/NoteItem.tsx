import { Notes } from "../data/notes";

export const NoteItem = () => {

  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <p className="card-text">
          {Notes[0].text}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
