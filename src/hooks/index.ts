import { useOutletContext } from "react-router-dom";

import type { INote } from "../types/INote"

interface OutletContext {
  notes: INote[];
  addNote: (text: string) => void;
  removeNote: (id: string) => void;
  editNote: (id: string, newText: string) => void
  toggleCompleted: (id: string) => void;
}

export const useOutletCtx = () => useOutletContext<OutletContext>();