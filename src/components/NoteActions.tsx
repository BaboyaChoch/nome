import { Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { Note } from "./NoteItem";

interface NoteActionsProps {
  note: Note;
}

export default function NoteActions({ note }: NoteActionsProps) {
  const handleEdit = () => {
    console.log("Edit", note);
  };

  const handleDelete = () => {
    console.log("Delete", note);
  };
  return (
    <Popover className="relative">
      <Popover.Button>
        <FontAwesomeIcon icon={faEllipsis} />
      </Popover.Button>
      <Popover.Panel className="opacity-1 absolute z-10 rounded-md bg-indigo-100">
        <Button handleOnClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} className="px-2" />
          <label htmlFor="edit">Edit</label>
        </Button>
        <Button handleOnClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} className="px-2" />
          <label htmlFor="edit">Delete</label>
        </Button>
      </Popover.Panel>
    </Popover>
  );
}
