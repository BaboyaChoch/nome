import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import NoteActions from "./NoteActions";

interface NoteFormProps {
  open: boolean;
  handleSubmit: () => void;
}

export default function NoteForm({ open, handleSubmit }: NoteFormProps) {
  const [newContent, setNewContent] = useState("");

  return (
    <div
      style={{ display: open ? "" : "none" }}
      className="m-4 flex flex-col justify-center"
    >
      <div>
        <textarea
          name="note"
          className="  w-full  flex-col rounded-md p-2 shadow shadow-indigo-500"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button className="border-1 w-15 my-2 rounded-md bg-indigo-200 p-1 text-black shadow-sm shadow-yellow-400">
          Submit
        </button>
      </div>
    </div>
  );
}
