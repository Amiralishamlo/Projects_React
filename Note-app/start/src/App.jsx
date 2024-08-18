import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handlerAddNotes = (newNotes) =>
    setNotes(prevNotes => [...prevNotes, newNotes]);


  const handlerOnDeleteNote = (id) =>
    setNotes((prevNote) => prevNote.filter((x) => x.id !== id));

  const handlerCompleteNote = (e) =>
    setNotes((preNote) => preNote.map((n) => n.id === Number(e.target.value) ? { ...n, Completed: !n.Completed } : n));

  return (
    <div className="container">
      <NoteHeader notes={notes} sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
      <div className="note-app">
        <AddNewNote onAddNote={handlerAddNotes} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList notes={notes}
            sortBy={sortBy}
            onDelete={handlerOnDeleteNote}
            onCompleted={handlerCompleteNote} />
        </div>
      </div>
    </div>
  );
}



export default App;
