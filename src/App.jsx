import React, { useState } from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Note from "./components/note.jsx";
import notes from "./notes.js";
import AddNote from "./components/addNote.jsx";
export default function App() {

  const [items, setItems] = useState(notes);

  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function addNote({title, content}) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        { title: title, content: content, key: prevItems.length },
      ];
    });
  }

  return (
    <div
      className="
    min-h-screen w-screen 
    bg-secondary
    text-background
    "
    >
      <Header />
      <main
        style={{ gridAutoFlow: 'dense' }}
        className="
        h-full overflow-auto
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        justify-items-center items-start
        dense-grid
      "
      >
        {items.map((note, index) => (
          <Note key={index} 
          title={note.title} 
          content={note.content} 
          onDelete={() => deleteNote(index)}/>
        ))}
        <AddNote onAdd = {(props) => addNote(props)}/>
      </main>
      <Footer />
    </div>
  );
}
