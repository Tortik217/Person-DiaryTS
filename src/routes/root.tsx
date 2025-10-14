import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Notes } from "../data/notes";
import type { INote } from "../types/INote";

export function Root() {

  const [notes, setNotes] = useState<INote[]>(Notes)

  const addNote = (text: string) => {
    const newNote: INote = {
      id: Date.now(),
      text,
      complited: false
    }
    setNotes((prev) => [...prev, newNote])
  }

  const removeNote = (id: number) => {
    setNotes(notes.filter((prev => prev.id !== id)))
  }

  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
      <Header />
      <Outlet context={{notes, addNote, removeNote}}/>
    </div>
  );
}
