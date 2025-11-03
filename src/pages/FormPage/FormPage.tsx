import {useState} from "react";
import {useOutletCtx} from '../../hooks'

export function FormPage() {
  const [inputValue, setInputValue] = useState<string>("");

  const { addNote } = useOutletCtx();

  const handleAdd = () => {
    if (inputValue.trim()) {
      addNote(inputValue);
      setInputValue("");
    }
  };

  // const clearInputDate  = inputValue.trim().toLowerCase();

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
        disabled={inputValue.length < 3}
      >
        Push
      </button>
    </form>
  );
}
