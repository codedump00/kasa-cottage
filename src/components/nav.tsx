import React, { ReactElement } from "react";
import "./nav.css";

interface Props {}

export default function Nav({}: Props): ReactElement {
  return (
    <header className="nav__header">
      <nav>
        <div className="nav__element">Home</div>
        <div className="nav__element">Menu</div>
        <div className="nav__element">Contact</div>
      </nav>
    </header>
  );
}
