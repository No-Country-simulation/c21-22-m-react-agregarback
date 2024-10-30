import "./style.css";
import Sponsors from "../Sponsors";
import Work from "../Work";

const About = () => {

  return (
    <>
      <div className="about">
        <div className="who">
          <h3><b>¿Quiénes somos?</b></h3>
          <p>En <b>Best Friend</b>, creemos que cada mascota merece un hogar lleno de amor y cuidado. Nuestra misión es conectar personas y animales de forma sencilla, segura y responsable, asegurándonos de que cada adopción sea una decisión consciente y compartida por todos los miembros de la familia.
          <br />
          <br />
          Como plataforma especializada en adopciones, buscamos facilitar el proceso mediante herramientas intuitivas y eficientes. Nuestros adoptantes pueden acceder a un sistema claro y accesible, donde un administrador revisa cuidadosamente las solicitudes para asegurarse de que cada mascota encuentre un hogar adecuado y preparado para recibirla.</p>
        </div>
      </div>
      <Sponsors />
      <Work />
    </>
  );
};

export default About;