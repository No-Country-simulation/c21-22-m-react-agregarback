import "./style.css";
import { Link } from "react-router-dom";
import rainforest from "/assets/rainforest.jpg?url";
import animalProtection from "/assets/animalprotection.png?url";
import greenpeace from "/assets/greenpeace.png?url";
import oneHealth from "/assets/onehealth.png?url";
import royalCanin from "/assets/royalcanin.png?url";
import worldAnimalProtection from "/assets/worldanimalprotection.png?url";
import purina from "/assets/purina.png?url";

const Sponsors = () => {
  return (
    <div className="sponsors">
      <h3><b>Patrocinadores</b></h3>
      <p>En <b>Best Friend</b>, trabajamos junto a empresas y organizaciones comprometidas con el bienestar animal. Gracias a nuestros patrocinadores, podemos ofrecer mejores recursos y beneficios para los adoptantes, asegurando que cada mascota tenga una vida óptima en su nuevo hogar.
      <br />
      <br />
      Desde alimentos y accesorios hasta servicios veterinarios y de entrenamiento, nuestros colaboradores hacen posible que el proceso de adopción sea completo y accesible para todos. <b>Juntos, aumentamos las oportunidades para cambiar vidas y construir historias de amor incondicional.</b></p>
      <div>
      <div>
        <Link to="https://www.rainforest-alliance.org" target="_blank">
          <img src={rainforest} alt="rainforest" />
        </Link>
      </div>
      <div>
        <Link to="https://www.animalprotective.org" target="_blank">
          <img src={animalProtection} alt="animalProtection" />
        </Link>
      </div>
      <div>
        <Link to="https://www.greenpeace.org/argentina" target="_blank">
          <img src={greenpeace} alt="greenpeace" />
        </Link>
      </div>
      <div>
        <Link to="https://acsa.gencat.cat/es/seguretat_alimentaria/one-health/index.html" target="_blank">
        <img src={oneHealth} alt="oneHealth" />
        </Link>
      </div>
      <div>
        <Link to="https://www.royalcanin.com/ar" target="_blank">
          <img src={royalCanin} alt="royalCanin" />
        </Link>
      </div>
      <div>
        <Link to="https://www.worldanimalprotection.org" target="_blank">
          <img src={worldAnimalProtection} alt="worldAnimalProtection" />
        </Link>
      </div>
      <div>
        <Link to="https://www.purina.com" target="_blank">
          <img src={purina} alt="purina" />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Sponsors;