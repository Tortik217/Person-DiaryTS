import { useState } from "react";
// import { INote } from "../../types/INote";

export function FormPage() {

  const [inputValue, setInputValue] = useState<string>('')

  function addItem(value: string) {
    console.log(value);
  }

  return (
      <form action="#" className="form d-flex flex-column gap-2">
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
        <button type="button" className="textarea-btn btn btn-primary" onClick={() => addItem(inputValue)}>
          Push
        </button>
      </form>
  );
}
