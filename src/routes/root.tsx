import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";
import {Notes} from "../data/notes";
import {getIsoDate} from "../hooks/dateUtils";
import type {INote} from "../types/INote";
import {nanoid} from "nanoid";
import notesAPI from "../api/notesAPI.ts";

// import * as localforage from "localforage";

export function Root() {
  const [notes, setNotes] = useState<INote[]>(Notes);

  const addNote = async (text: string) => {
    const newNote: INote = {
      id: nanoid(5),
      text,
      completed: false,
      date: getIsoDate(),
    };

    setNotes((prev) => [...prev, newNote]);

    try {
      const saved = await notesAPI.add(newNote);

      setNotes((prev) => prev.map((n) => (n.id === newNote.id ? saved : n)));
    } catch (e) {
      console.error("Не удалось добавить заметку:", e);
    }
  };


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3002/notes");
        const json = await response.json();
        setNotes(Array.isArray(json) ? json : []);
      } catch (e) {
        console.error("Не удалось загрузить заметки:", e);
        setNotes(Notes);
      }
    })();
  }, []);


  const removeNote = async (id: string) => {

    setNotes(prev => prev.filter(note => note.id !== id));

    try {
      await notesAPI.delete(id);
      setNotes(prev => prev.filter(note => note.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const editNote = async (id: string, newText: string) => {

    setNotes((n) =>
        n.map((note) =>
            note.id === id ? {...note, text: newText} : note
        )
    );

    try {
      const updated = await notesAPI.edit(id, newText);
      setNotes((prev) =>
          prev.map((note) => (note.id === id ? updated : note))
      );
    } catch (e) {
      console.error(e);
    }

  };

  const toggleCompleted = async (id: string) => {

    setNotes((n) =>
        n.map((note) =>
            note.id === id
                ? {...note, completed: !note.completed}
                : note
        )
    );

    try {
      const current = notes.find(n => n.id === id);
      if (!current) return;

      const updated = await notesAPI.toggle(id, !current.completed);

      setNotes(prev =>
          prev.map(n => (n.id === id ? updated : n))
      );
    } catch (e) {
      console.error(e);
    }
  };


  return (
      <div className="main d-flex flex-column justify-content-center align-items-center">
        <Header/>
        <Outlet context={{notes, addNote, removeNote, editNote, toggleCompleted}}/>
      </div>
  );
}
