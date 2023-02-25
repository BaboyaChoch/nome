import React from "react";
import Header from "../../components/Header";
import NoteForm from "../../components/NoteForm";
import { Note } from "../../components/NoteItem";
import NotesList from "../../components/NotesList";

export const notes: Note[] = [
  {
    noteId: 1,
    noteContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nihil dolore. Velit, debitis praesentium. Dolor, voluptatum error facere quo distinctio deserunt obcaecati nam dicta. Id dicta consequatur minus nulla aspernatur",
  },
  {
    noteId: 2,
    noteContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nihil dolore. Velit, debitis praesentium. Dolor, voluptatum error facere quo distinctio deserunt obcaecati nam dicta. Id dicta consequatur minus nulla aspernatur",
  },
  {
    noteId: 3,
    noteContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nihil dolore. Velit, debitis praesentium. Dolor, voluptatum error facere quo distinctio deserunt obcaecati nam dicta. Id dicta consequatur minus nulla aspernatur",
  },
  {
    noteId: 4,
    noteContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, nihil dolore. Velit, debitis praesentium. Dolor, voluptatum error facere quo distinctio deserunt obcaecati nam dicta. Id dicta consequatur minus nulla aspernatur",
  },
];

export default function Home() {
  const [showForm, setShowForm] = React.useState(false);

  const handleAddNote = () => {
    console.info("Adding new NOTE");
    setShowForm(false);
  };

  return (
    <div className="container mx-auto max-w-md shadow">
      <div className="row">
        <Header showForm={showForm} setShowForm={setShowForm} />
      </div>
      <div className="row">
        <NoteForm open={showForm} handleSubmit={handleAddNote} />
      </div>
      <div className="row">
        <NotesList notes={notes} />
      </div>
    </div>
  );
}
