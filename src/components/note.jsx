import React from "react";

function Note({ title, content }) {
  return (
    <div
      draggable="true"
      className="bg-background 
      
        text-primary
        h-auto
        w-200px 
        md: min-h-content
        
        inline-block
        border-4 
        rounded-lg 
        shadow-lg
        p-2
        "
    >
      <h1
        className="

            align-top
            h-auto

            "
      >
        {title}
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
        {content}
      </p>
    </div>
  );
}

export default Note;
