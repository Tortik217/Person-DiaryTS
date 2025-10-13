import { useOutletContext } from "react-router-dom";

import type { INote } from "../types/INote"

interface OutletContext {
  notes: INote[];
  addNote: (text: string) => void;
  removeNote: (id: number) => void;
}

export const useOutletCtx = () => useOutletContext<OutletContext>();