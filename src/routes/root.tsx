<<<<<<< Updated upstream
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Notes } from "../data/notes";
import { getIsoDate } from "../hooks/dateUtils";
import type { INote } from "../types/INote";
import { nanoid } from "nanoid";
import * as localforage from "localforage";
=======
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";
import {Notes} from "../data/notes";
import {getIsoDate} from "../hooks/dateUtils";
import type {INote} from "../types/INote";
import {nanoid} from "nanoid";
import notesAPI from "../api/notesAPI.ts";
// import * as localforage from "localforage";
>>>>>>> Stashed changes

export function Root() {
  const [notes, setNotes] = useState<INote[]>(Notes);
  const [isLoaded, setIsLoaded] = useState(false);

  const addNote = async (text: string) => {
    const newNote: INote = {
      id: nanoid(5),
      text,
      completed: false,
      date: getIsoDate(),
    };

    const addedNote = await notesAPI.add(newNote);
    setNotes(prev => [...prev, addedNote]);
  };


  useEffect(() => {
    (async () => {
      try {
<<<<<<< Updated upstream
        const stored = await localforage.getItem<INote[] | null>(NOTES_KEY);

        //Временно
        const normalized =
          Array.isArray(stored) && stored.length > 0 ? stored : Notes;
        setNotes(normalized);
        // Временно

        //если нет шаблона
        // setNotes(Array.isArray(stored) ? stored : Notes);
=======
        const response = await fetch("http://localhost:3002/notes");
        const json = await response.json();
        setNotes(Array.isArray(json) ? json : []);
>>>>>>> Stashed changes
      } catch (e) {
        console.error("Не удалось загрузить заметки:", e);
        setNotes(Notes);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);


  const removeNote = async (id: string) => {
    try {
      await notesAPI.delete(id);
      setNotes(prev => prev.filter(note => note.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

<<<<<<< Updated upstream
  const editNote = (id: string, newText: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  const toggleCompleted = (id: string) =>
    setNotes((list) =>
      list.map((n) => (n.id === id ? { ...n, completed: !n.completed } : n))
    );
=======
  const editNote = async (id: string, newText: string) => {
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

>>>>>>> Stashed changes

  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
      <div className="main-section p-3">
        <Header />
        <Outlet
          context={{ notes, addNote, removeNote, editNote, toggleCompleted }}
        />
      </div>
    </div>
  );
}
