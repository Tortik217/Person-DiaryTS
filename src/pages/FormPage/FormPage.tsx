import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { INote } from "../../types/INote";

interface OutletContext {
  notes: INote[];
  addNote: (text: string) => void;
}

export function FormPage() {
  const [inputValue, setInputValue] = useState<string>("");

  const { addNote } = useOutletContext<OutletContext>();

  const handleAdd = () => {
    if (inputValue.trim()) {
      addNote(inputValue);
      setInputValue("");
    }
  };

  return (
    <form
      action="#"
      className="form d-flex flex-column gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <textarea
        className="textarea-main border border-2 border-dark"
        name="entry"
        id="entry"
        rows={15}
        cols={50}
        placeholder="Enter whatever you want :)"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        required
      ></textarea>
      <button
        type="button"
        className="textarea-btn btn btn-primary"
        onClick={() => handleAdd()}
      >
        Push
      </button>
    </form>
  );
}
