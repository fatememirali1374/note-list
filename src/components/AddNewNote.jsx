import { useState } from "react";


function AddNewNote() {
const [title,setTitle]=useState("")
const [desc,setDesc]=useState("")
const handleSubmit=(e)=>{
e.preventDefault();
const newNote={
    title,
    desc,
    id:Date.now(),
    completed:false,
    createdAt:new Date().toISOString()
};
setDesc("")
setTitle("")
console.log(newNote);
}

  return (
    <div className="add-new-note">
        <h2>Add New Note</h2>
          <form className="note-form" onSubmit={handleSubmit}>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="text-field" placeholder="note title..." />
          <input value={desc} onChange={(e)=>setDesc(e.target.value)} type="text" className="text-field" placeholder="note description..." />
          <button type="submit" className="btn btn--primary">Add New Note</button>
          </form>
    </div>
  ) 
}

export default AddNewNote