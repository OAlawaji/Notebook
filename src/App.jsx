import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Note from "./components/note.jsx";
import notes from "./notes.js";
export default function App() {
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
        className="
        h-full overflow-auto
        grid gap-20px
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        justify-items-center items-center
      "
      >
        {notes.map((note) => (
          <Note key={note.key} title={note.title} content={note.content} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
