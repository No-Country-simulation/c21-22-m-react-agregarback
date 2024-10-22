import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png?url";
import whatsapp from "/assets/whatsapp.png?url";
import instagram from "/assets/instagram.png?url";
import facebook from "/assets/facebook.png?url";
import menu from "/assets/menu.png?url";
import bone from "/assets/bone.png?url";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className={`${clicked ? "menuOpen" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="items">
        <Link to="/" onClick={handleClick}>
          <p><b>Inicio</b></p>
        </Link>
        <Link to="/dogs" onClick={handleClick}>
          <p><b>Perros</b></p>
        </Link>
        <Link to="/cats" onClick={handleClick}>
          <p><b>Gatos</b></p>
        </Link>
        <Link to="/about" onClick={handleClick}>
          <p><b>Sobre Nosotros</b></p>
        </Link>
        <Link to="/contact" onClick={handleClick}>
          <p><b>Contacto</b></p>
        </Link>
      </div>
      <div className="bone">
        <img src={bone} alt="bone" />
      </div>
      <div className="socialMedia">
        <div>
          <Link to="https://wa.me" onClick={handleClick} target="_blank">
            <img src={whatsapp} alt="whatsapp" />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com" onClick={handleClick} target="_blank">
            <img src={instagram} alt="instagram" />
          </Link>
        </div>
        <div>
          <Link to="https://www.facebook.com" onClick={handleClick} target="_blank">
            <img src={facebook} alt="facebook" />
          </Link>
        </div>
      </div>
      <div className="login">
        <Link to="/login" onClick={handleClick}>
          <button type="button" class="btn btn-dark">Iniciar sesión</button>
        </Link>
      </div>
      <div className="register">
        <Link to="/register" onClick={handleClick}>
          <button type="button" class="btn btn-dark">Registrarse</button>
        </Link>
      </div>
      <button className="menu" onClick={handleClick}>
        <img src={menu} alt="menu" />
      </button>
    </nav>
  );
};

export default Nav;