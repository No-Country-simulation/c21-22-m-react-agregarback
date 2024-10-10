import "./style.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png?url";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="items">
        <Link to="/">
          <p><b>Inicio</b></p>
        </Link>
        <Link to="/dogs">
          <p><b>Perros</b></p>
        </Link>
        <Link to="/cats">
          <p><b>Gatos</b></p>
        </Link>
        <Link to="/about">
          <p><b>Sobre Nosotros</b></p>
        </Link>
        <Link to="/contact">
          <p><b>Contacto</b></p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;