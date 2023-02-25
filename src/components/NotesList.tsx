import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import NoteItem, { Note } from "./NoteItem";

interface NotesListProps {
  notes: Note[];
}

export default function NotesList({ notes = [] }: NotesListProps) {
  return (
    <div className="flex-col justify-center p-2 align-middle">
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </div>
  );
}
