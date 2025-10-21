import type { INote } from "../types/INote";

export const Notes: INote[] = [
  { id: 1, text: "Hello, World!", complited: false, date: new Date().toISOString().split('T')[0] },
  { id: 2, text: "Hello, World!", complited: false, date: '2025-10-22' },
  { id: 3, text: "Hello, World!", complited: false, date: '2025-10-22' },
  { id: 4, text: "Hello, World!", complited: false, date: '2025-10-23' },
  { id: 5, text: "Hello, World!", complited: false, date: '2025-10-24' },
  { id: 6, text: "Hello, World!", complited: false, date: '2025-10-25' },
];
// export const Notes: INote[] = [];
