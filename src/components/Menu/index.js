import React from "react";
import logo from "../../assets/img/logo.png";
import "./menu.css";
//import ButtonLink from "../ButtonLInk";
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Logo da Jrflix"></img>
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu; // brau
