import React from "react";
import logo from "../../assets/img/logo.png";
import {Link} from 'react-router-dom'
import "./menu.css";
//import ButtonLink from "../ButtonLInk";
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Logo da Jrflix"></img>
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video2
      </Button>
    </nav>
  );
}

export default Menu; // brau
