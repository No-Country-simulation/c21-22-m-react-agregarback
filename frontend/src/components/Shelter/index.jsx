import "./style.css";
import Carousel from "../Carousel";

const Shelter = () => {
  return (
    <div className="shelter">
        <h3><b>Nuestro refugio:</b> Un hogar temporal lleno de esperanza</h3>
        <p>En nuestro refugio, cada mascota recibe el amor, cuidado y atención que merece mientras espera encontrar su lugar definitivo. Trabajamos incansablemente para proporcionarles un espacio seguro donde puedan recuperarse, socializar y prepararse para un nuevo comienzo junto a una familia que los ame.</p>
        <h5><b>Lo que ofrecemos:</b></h5>
        <p><b>✓ Espacios amplios y seguros:</b> Áreas donde las mascotas pueden jugar y socializar con otras.
        <br />
        <b>✓ Cuidado veterinario:</b> Atención médica y controles regulares para asegurar su salud.
        <br />
        <b>✓ Mucho amor:</b> Cada animal es tratado con cariño mientras espera su adopción.</p>
        <Carousel />
    </div>
  );
};

export default Shelter;