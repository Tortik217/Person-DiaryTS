import { useOutletContext } from "react-router-dom";

import type { INote } from "../types/INote"

interface OutletContext {
  notes: INote[];
  addNote: (text: string) => void;
  removeNote: (id: number) => void;
  editNote: (id: number, text: string) => void;
}

export const useOutletCtx = () => useOutletContext<OutletContext>();