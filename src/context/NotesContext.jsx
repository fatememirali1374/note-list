import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null)


const notesReducer = (notes, { type, payload }) => {
  switch (type) {
    case "add": {
      return [...notes, payload]
    }
    case "delete": {
      return notes.filter((n) => n.id !== payload)
    }
    case "complete": {
      return notes.map((note) =>
        note.id === payload ? { ...note, completed: !note.completed } : note)

    }
    default:
      throw new Error("unknown Error" + type)
  }
}
export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, [])
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>)
}

export function useNotes() {
  return useContext(NotesContext)
}
export function useNotesDispatch() {
  return useContext(NotesDispatchContext)
}