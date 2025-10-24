import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Notes } from "../data/notes";
import { getIsosString } from "../hooks/dateUtils";
import type { INote } from "../types/INote";

export function Root() {
  const [notes, setNotes] = useState<INote[]>(Notes);

  const addNote = (text: string) => {
    const newNote: INote = {
      id: Date.now(),
      text,
      complited: false,
      date: getIsosString(),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const removeNote = (id: number) => {
    setNotes(notes.filter((prev) => prev.id !== id));
  };

  const editNote = (id: number, newText: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
      <Header />
      <Outlet context={{ notes, addNote, removeNote, editNote }} />
    </div>
  );
}
