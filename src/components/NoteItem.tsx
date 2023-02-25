import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import NoteActions from "./NoteActions";

export interface Note {
  noteId: number;
  noteContent: string;
}

interface NoteProps {
  note: Note;
}

export default function NoteItem({ note }: NoteProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.noteContent);
  return (
    <div
      className=" m-2 flex-col  rounded-md p-2 shadow shadow-indigo-500"
      onDoubleClick={() => {
        setIsEditing(true);
      }}
      onMouseLeave={() => {
        console.log("Abort", content);
        setIsEditing(false);
      }}
    >
      <div className=" flex justify-end ">
        <NoteActions note={note} />
      </div>
      {isEditing ? (
        <div>
          <textarea
            name="note"
            className="  h-fit  w-full resize-none flex-col rounded-md p-2 shadow shadow-indigo-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      ) : (
        <div>{note.noteContent}</div>
      )}
    </div>
  );
}
