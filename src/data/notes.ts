import type { INote } from "../types/INote";
import { getIsoString } from "../hooks/dateUtils";

export const Notes: INote[] = [
  { id: 1, text: "Hello, World!", completed: false, date: getIsoString() },
];
// export const Notes: INote[] = [];
