import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";
import {Notes} from "../data/notes";
import {getIsoDate} from "../hooks/dateUtils";
import type {INote} from "../types/INote";
import {nanoid} from "nanoid";
import * as localforage from "localforage";

export function Root() {
  const [notes, setNotes] = useState<INote[]>(Notes);
  const [isLoaded, setIsLoaded] = useState(false);

  const addNote = (text: string) => {
    const newNote: INote = {
      id: nanoid(5),
      text,
      completed: false,
      date: getIsoDate(),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const NOTES_KEY = "notes";

  useEffect(() => {
    (async () => {
      try {
        const stored = await localforage.getItem<INote[] | null>(NOTES_KEY);

        //Временно
        const normalized = Array.isArray(stored) && stored.length > 0 ? stored : Notes;
        setNotes(normalized);
        // Временно

        //если нет шаблона
        // setNotes(Array.isArray(stored) ? stored : Notes);
      } catch (e) {
        console.error("Не удалось загрузить заметки:", e);
        setNotes(Notes);
      } finally {
        setIsLoaded(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localforage.setItem(NOTES_KEY, notes).catch((e) => {
      console.error("Не удалось сохранить заметки:", e);
    });
  }, [notes, isLoaded]);

  const removeNote = (id: string) => {
    setNotes(notes.filter((prev) => prev.id !== id));
  };

  const editNote = (id: string, newText: string) => {
    setNotes((prev) =>
        prev.map((note) => (note.id === id ? {...note, text: newText} : note))
    );
  };

  const toggleCompleted = (id: string) =>
      setNotes((list) =>
          list.map((n) => (n.id === id ? { ...n, completed: !n.completed } : n))
      );

  return (
      <div className="main d-flex flex-column justify-content-center align-items-center">
        <Header/>
        <Outlet context={{notes, addNote, removeNote, editNote, toggleCompleted}}/>
      </div>
  );
}
