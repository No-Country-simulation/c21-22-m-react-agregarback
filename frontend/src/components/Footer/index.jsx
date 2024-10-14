import "./style.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo-eslogan.png?url";
import whatsapp from "/assets/whatsapp.png?url";
import instagram from "/assets/instagram.png?url";
import facebook from "/assets/facebook.png?url";
import phone from "/assets/phone.png?url";
import mail from "/assets/mail.png?url";
import location from "/assets/location.png?url";
import clock from "/assets/clock.png?url";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <img src={logo} alt="logo" />
        <div className="contact">
          <p>Best Friend | Amigos para siempre</p>
          <div>
            <Link to="tel:+614891528">
              <img src={phone} alt="phone" />
              <p>614-891-528</p>
            </Link>
          </div>
          <div>
            <Link to="mailto:bestfriend@refugioanimal.org" target="_blank">
              <img src={mail} alt="mail" />
              <p>bestfriend@refugioanimal.org</p>
            </Link>
          </div>
          <div>
            <Link to="https://www.google.com/maps/place/I-255+%26+La+Turbinas,+La+Marinana,+San+Fernando,+O'Higgins,+Chile/@-34.5960536,-70.9246737,17z/data=!3m1!4b1!4m6!3m5!1s0x966490db1fbead85:0xfee246949351309f!8m2!3d-34.596058!4d-70.9220988!16s%2Fg%2F11gfnxfr0n?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <img src={location} alt="location" />
              <p>Las Turbinas I-255</p>
            </Link>
          </div>
          <div>
            <Link to="/contact">
              <img src={clock} alt="clock" />
              <p>Lunes a viernes: de 10:00 a 17:00</p>
            </Link>
          </div>
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
      </div>
      <p>© 2024 Best Friend. Todos los derechos reservados.</p>
    </div>
  );
};

export default Footer;