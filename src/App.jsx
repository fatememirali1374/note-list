import { useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

const notesReducer=(notes,{type, payload})=>{
 switch(type){
  case "add":{
    return [...notes, payload]
  }
  case "delete":{
    return notes.filter((n)=>n.id!==payload)
  }
  case "complete":{
    return notes.map((note)=>
     note.id===payload?{...note,completed:!note.completed}:note)
    
  }
  default:
    throw new Error("unknown Error"+ type)
 }
}

function App() {
  // const [notes, setNotes]= useState([])
  const[notes, dispatch]= useReducer(notesReducer,[])
  const [sortBy, setSortBy]=useState("latest")
  const handleAddNote=(newNote)=>{
    // setNotes(prevNotes=>[...prevNotes, newNote])
    dispatch({type:"add", payload:newNote})
  }
  const handleDeleteNote=(id)=>{
    // const filteredNotes= notes.filter((n)=>n.id!==id)
    // setNotes(filteredNotes)
    // or
    // setNotes(prevNotes=>prevNotes.filter((n)=>n.id!==id))
dispatch({type:"delete", payload:id})
  }
  const handleCompleteNote=(e)=>{
const noteId=Number(e.target.value)
// const newNotes=notes.map((note)=>
//   note.id===noteId?{...note,completed:!note.completed}:note
// )
// or
// setNotes((prevNotes)=>
// prevNotes.map((note)=>
//  note.id===noteId?{...note,completed:!note.completed}:note)
// )
dispatch({type:"complete",payload:noteId})
}

 return(
    <div className="container">
 
        <NoteHeader notes={notes} sortBy={sortBy} onSort={(e)=>setSortBy(e.target.value)}/>
    
      <div className="note-app">
          <AddNewNote  onAddNote={handleAddNote}/>
        
        <div className="note-container">
          <NoteStatus notes={notes}/>
         <NoteList notes={notes} sortBy={sortBy} onDelete={handleDeleteNote} onComplete={handleCompleteNote}/>
        </div>
      </div>
    </div>
  )
}

export default App;
 