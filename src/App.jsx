import "./App.css";
import AddNewNote from "./components/AddNewNote";
function App() {
  return(
    <div className="container">
      <div className="note-header">
        <h1>My Notes (0) </h1>
        <div>sorting</div>
      </div>
      <div className="note-app">
          <AddNewNote/>
        
        <div className="note-container">notes</div>
      </div>
    </div>
  )
}

export default App;
 