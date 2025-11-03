import type { INote } from "../types/INote";
import { getIsoDate } from "../hooks/dateUtils";

export const Notes: INote[] = [
  { id: 1, text: "Hello, World!", completed: false, date: getIsoDate() },
];
// export const Notes: INote[] = [];
