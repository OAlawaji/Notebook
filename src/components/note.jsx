import React from "react";

function Note(props) {
  return (
    <div
      draggable="true"
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
      relative
      flex flex-col justify-between
        "
    >
      <h1
        className="

            align-top
            h-auto
            "
      >
        {props.title}
      </h1>

      <p
        className="
            w-5/6
            overflow-y-auto
            border-t border-gray-400 
            h-auto
            mt-2
            "
      >
        {props.content}
      </p>
      <button
      className="
      self-end
      bg-item hover:text-secondary text-background font-bold py-1 px-2 rounded
      shadow-md hover:shadow-lg transition-shadow duration-300
      "
      onClick={() => {
        props.onDelete(props.id);
      }}
      >delete</button>
    </div>
  );
}

export default Note;
