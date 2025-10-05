export default function FormForEntries() {
  return (
    <form action="#" className="form d-flex flex-column gap-2">
      <textarea
        className="textarea-main border border-2 border-dark"
        name="entry"
        id="entry"
        rows={15}
        cols={50}
        placeholder="Enter whatever you want :)"
        required
      ></textarea>
      <button type="submit" className="textarea-btn btn btn-primary">
        Push
      </button>
    </form>
  );
}
