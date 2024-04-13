import React, {useState} from "react";

function AddNote(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleAdd = () => {
        props.onAdd({ title, content });
        setTitle("");
        setContent("");
      };
  return (
    <div
      className="        bg-background 
      text-primary
      h-auto
      w-200px 
      md:min-h-content
      inline-block
      border-4 
      rounded-lg 
      shadow-lg
      p-2
      flex flex-col justify-between

        "
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
        w-full
        p-2

        focus:outline-none focus:border-blue-500
        bg-background 
        inline-block
        border-4 
        rounded-lg 
        shadow-lg
            "
      >
      </input>
        <div className="border-t-2"></div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="
        bg-background 
        text-primary
        h-full
        w-full
        md:min-h-content
        inline-block
        border-4 
        rounded-lg 
        shadow-lg
        p-2
            ">
      </textarea>
      <button
      className="
      self-end
      bg-item hover:text-secondary text-background font-bold py-1 px-2 rounded
      shadow-md hover:shadow-lg transition-shadow duration-300
      "
      onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddNote;
