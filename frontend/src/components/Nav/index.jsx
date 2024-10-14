import "./style.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png?url";
import whatsapp from "/assets/whatsapp.png?url";
import instagram from "/assets/instagram.png?url";
import facebook from "/assets/facebook.png?url";

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
      <div className="socialMedia">
        <div>
          <Link to="https://wa.me" target="_blank">
            <img src={whatsapp} alt="whatsapp" />
          </Link>
        </div>
        <div>
          <Link to="https://www.instagram.com" target="_blank">
            <img src={instagram} alt="instagram" />
          </Link>
        </div>
        <div>
          <Link to="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="facebook" />
          </Link>
        </div>
      </div>
      <div className="login">
        <Link to="/login">
          <button type="button" class="btn btn-dark">Iniciar sesión</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;