import "./style.css";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <div className="donate">
      <h3><b>¡Ayúdanos a seguir salvando vidas!</b></h3>
      <p>Cada día, trabajamos arduamente para darles una segunda oportunidad a animales que han sido abandonados o maltratados. Sin embargo, no podemos hacerlo solos. <b>Tu donación puede marcar una diferencia enorme</b> en la vida de estos seres que tanto lo necesitan.</p>
      <h5><b>¿Cómo puedes contribuir?</b></h5>
      <p><b>• Donaciones económicas:</b> Con una contribución monetaria, podemos cubrir costos esenciales como alimentación, atención veterinaria, medicamentos y mantenimiento de nuestras instalaciones.
      <br />
      <br />
      <b>• Donaciones de insumos:</b> Si prefieres también aceptamos alimentos, mantas, juguetes, productos de limpieza y medicamentos.
      <br />
      <br />
      <b>• Voluntariado:</b> No solo se puede ayudar con dinero. También necesitamos manos amigas para cuidar a las mascotas, asistir en los eventos de adopción o ayudar en el refugio.</p>
      <h5><b>¡Haz tu aporte!</b></h5>
      <p>Puedes donar de manera segura a través de PayPal o contactarnos para coordinar la entrega de insumos. <b>Con tu ayuda, podemos continuar rescatando y cuidando a más animales.</b></p>
      <div>
        <Link to="https://www.paypal.com" target="_blank">
          <button type="button" class="btn btn-dark">Donar ahora</button>
        </Link>
        <Link to="/contact">
          <button type="button" class="btn btn-dark">Contáctanos</button>
        </Link>
      </div>
    </div>
  );
};

export default Donate;