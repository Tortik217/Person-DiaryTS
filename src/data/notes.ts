import type { INote } from "../types/INote";
import { getIsosString } from "../hooks/dateUtils";

export const Notes: INote[] = [
  { id: 1, text: "Hello, World!", complited: false, date: getIsosString() },
];
// export const Notes: INote[] = [];
