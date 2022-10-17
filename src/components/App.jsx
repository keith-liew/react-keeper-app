import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../note";
import Form from "./Form";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(note) {
    setNote([...notes, note]);
  }

  function deleteNote(id) {
    setNote(notes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <Form addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
