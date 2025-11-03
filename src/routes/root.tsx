import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Notes } from "../data/notes";
import { getIsoDate } from "../hooks/dateUtils";
import type { INote } from "../types/INote";
import {nanoid} from "nanoid";

export function Root() {
  const [notes, setNotes] = useState<INote[]>(Notes);

  const addNote = (text: string) => {
    const newNote: INote = {
      id: nanoid(5),
      text,
      completed: false,
      date: getIsoDate(),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const removeNote = (id: string) => {
    setNotes(notes.filter((prev) => prev.id !== id));
  };

  const editNote = (id: string, newText: string) => {
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
