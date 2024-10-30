import "./style.css";
import luna from "/assets/luna.png?url";
import rocky from "/assets/rocky.jpg?url";
import brownie from "/assets/brownie.png?url";
import ambar from "/assets/ambar.png?url";

const Testimonials = () => {
    return (
      <div className="testimonials">
        <h3><b>Testimonios de nuestros adoptantes</b></h3>
        <div className="testimonial">
          <div>
            <img src={luna} alt="luna" />
            <p><b>"Encontré a la mejor compañera gracias a Best Friend"</b>
            <br />
            <br />
            <i>"Adoptar a Luna fue la mejor decisión. El proceso fue súper fácil y el equipo fue muy atento durante todo el camino. Ahora Luna es parte de nuestra familia y no podríamos estar más felices."</i>
            <br />
            <br />
            - <b>Marianella</b>, adoptante de Luna</p>
          </div>
          <div>
            <img src={rocky} alt="rocky" />
            <p><b>"El lugar perfecto para encontrar a tu mascota ideal"</b>
            <br />
            <br />
            <i>"Gracias a Best Friend, adoptamos a Rocky y ha sido una bendición para nuestra familia. El equipo nos guió durante todo el proceso y se aseguraron de que Rocky fuera el compañero perfecto para nosotros."</i>
            <br />
            <br />
            - <b>Claudia</b>, adoptante de Rocky</p>
          </div>
        </div>
        <div className="testimonial">
          <div>
            <img src={brownie} alt="brownie" />
            <p><b>"Un refugio confiable y lleno de amor"</b>
            <br />
            <br />
            <i>"Adopté a mi perro Brownie aquí y el proceso fue transparente y rápido. Me hicieron sentir muy cómodo respondiendo todas mis dudas. ¡Gracias por ayudarme a encontrar a mi mejor amigo!"</i>
            <br />
            <br />
            - <b>Leonardo</b>, adoptante de Brownie</p>
          </div>
          <div>
            <img src={ambar} alt="ambar" />
            <p><b>"Cambiaron nuestras vidas para siempre"</b>
            <br />
            <br />
            <i>"Adoptar a Ambar fue una experiencia increíble. Desde el primer contacto hasta la adopción final, todo fue impecable. El equipo realmente se preocupa por el bienestar de los animales y las familias."</i>
            <br />
            <br />
            - <b>Luis</b>, adoptante de Ambar</p>
          </div>
        </div>
      </div>
    );
};

export default Testimonials;