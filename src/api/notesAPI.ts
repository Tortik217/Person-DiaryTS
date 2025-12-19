import type {INote} from "../types/INote";

const URL = 'http://localhost:3002/notes'

const headers = {
  'Content-Type': 'application/json',
}

const notesAPI =  {
  add: async (note: INote) => {
    const response = await fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(note),
    });
    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`${URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error(`DELETE failed: ${response.status}`);
    return;
  },

  edit: async (id: string, newText: string) => {
    const response =  await fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ text: newText }),
    })
    if (!response.ok) throw new Error(`PATCH edit failed: ${response.status}`);
    return await response.json();
  },

  toggle: async (id: string, completed: boolean) => {
    const response = await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ completed }),
    });
    if (!response.ok) throw new Error(`PATCH toggle failed: ${response.status}`);
    return await response.json();
  }

}

export default notesAPI