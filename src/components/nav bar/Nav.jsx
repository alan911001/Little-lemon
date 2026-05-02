import { useState } from "react";
import { ItemsNav } from "./ItemsNav";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container">
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ItemsNav
        classText={`nav-items ${isOpen ? "open" : ""}`}
        onClickItem={() => setIsOpen(false)}
      />
    </nav>
  );
};
