import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faSun,
  faMoon,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ showForm, setShowForm }: HeaderProps) {
  const [currentColorMode, setCurrentColorMode] = useState("light");

  const toggleColorMode = () => {
    if (currentColorMode === "light") {
      setCurrentColorMode("dark");
    } else {
      setCurrentColorMode("light");
    }
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  return (
    <header className="flex  items-center justify-between px-2 py-2 shadow">
      {showForm ? (
        <FontAwesomeIcon icon={faMinus} onClick={handleHideForm} />
      ) : (
        <FontAwesomeIcon icon={faPlus} onClick={handleShowForm} />
      )}

      <h1 className="font-bold">
        <FontAwesomeIcon icon={faNoteSticky} /> &nbsp; Nome
      </h1>

      {currentColorMode === "light" ? (
        <FontAwesomeIcon icon={faSun} onClick={toggleColorMode} />
      ) : (
        <FontAwesomeIcon icon={faMoon} onClick={toggleColorMode} />
      )}
    </header>
  );
}
