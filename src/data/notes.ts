import type { INote } from "../types/INote";
import { getIsoDate } from "../hooks/dateUtils";
import {nanoid} from "nanoid";

export const Notes: INote[] = [
  { id: nanoid(5), text: "Hello, World!", completed: false, date: getIsoDate() },
];
// export const Notes: INote[] = [];
