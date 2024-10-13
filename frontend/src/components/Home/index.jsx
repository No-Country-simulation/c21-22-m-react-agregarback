import "./style.css";
import Shelter from "../Shelter";
import Donate from "../Donate";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Amigos para siempre</h1>
        <h4>¡Encuentra a tu compañero de vida!</h4>
      </div>
      <div className="intro">
        <h5>En <b>Best Friend</b>, creemos que cada mascota merece un hogar lleno de amor. Nos dedicamos a conectar animales en busca de una segunda oportunidad con personas dispuestas a darles el cariño y cuidado que necesitan. Explora las historias de nuestros peludos y da el paso para hacer la diferencia en su vida... ¡y en la tuya!</h5>
      </div>
      <div className="steps">
        <h3><b>¿Cómo funciona?</b></h3>
        <p><b>1. Busca tu compañero ideal:</b> Navega entre las distintas mascotas disponibles para adopción.
        <br />
        <b>2. Envía una solicitud:</b> Completa nuestro formulario detallado para ayudarnos a conocer tu situación y asegurarnos de encontrar el match perfecto.
        <br />
        <b>3. Espera la aprobación:</b> Nuestro equipo revisará tu solicitud para garantizar que tanto tú como la mascota estén listos para inciar esta nueva etapa.</p>
        <h3><b>¿Listo para adoptar?</b></h3>
        <p>Comienza tu viaje hacia la adopción. <b>¡Tu nuevo mejor amigo te está esperando!</b></p>
      </div>
      <Shelter />
      <Donate />
    </>
  );
};

export default Home;