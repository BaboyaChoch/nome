import { Popover } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faEdit,
  faTrash,
  faDeaf,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  handleOnClick: () => void;
  children: React.ReactNode;
}

export default function Button({
  children,
  handleOnClick = () => {},
}: ButtonProps) {
  return (
    <div
      className="p:1 m-1  flex cursor-pointer flex-row items-center justify-start hover:bg-indigo-200"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
}
