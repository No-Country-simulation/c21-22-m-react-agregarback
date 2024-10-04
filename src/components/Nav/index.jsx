import "./style.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="items">
        <Link to="/">
          <p>Inicio</p>
        </Link>
        <Link to="/dogs">
          <p>Perros</p>
        </Link>
        <Link to="/cats">
          <p>Gatos</p>
        </Link>
        <Link to="/about">
          <p>Sobre Nosotros</p>
        </Link>
        <Link to="/contact">
          <p>Contacto</p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;