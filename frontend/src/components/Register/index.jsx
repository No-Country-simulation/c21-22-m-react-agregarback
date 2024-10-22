import "./style.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="registerSection">
      <h2>Únete a la comunidad de <b>Best Friend</b></h2>
      <h5>Crea una cuenta para conocer a nuestros peludos y enviar solicitudes de adopción</h5>
      <form action="http://localhost:3000/api/v1/user/signup" method="post">
        <div class="mb-3">
          <label for="nombre" class="form-label fw-bold">Nombre</label>
          <input type="text" class="form-control" id="nombre" required />
        </div>
        <div class="mb-3">
          <label for="apellido" class="form-label fw-bold">Apellido</label>
          <input type="text" class="form-control" id="apellido" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-bold">Email</label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="telefono" class="form-label fw-bold">Teléfono</label>
          <input type="tel" class="form-control" id="telefono" required />
        </div>
        <div class="mb-3">
          <label for="fechaNacimiento" class="form-label fw-bold">Fecha de Nacimiento</label>
          <input type="date" class="form-control fw-bold" id="fechaNacimiento" required />
        </div>
        <div class="mb-3">
          <label for="direccion" class="form-label fw-bold">Dirección</label>
          <input type="text" class="form-control" id="direccion" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fw-bold">Contraseña</label>
          <input type="password" class="form-control" id="password" required />
        </div>
        <div className="registerButton">
          <button type="submit" class="btn btn-dark">Registrarse</button>
        </div>
      </form>
      <div>
        <p>¿Ya tienes una cuenta?
          <br />
          <Link to="/login">
            <u>Inicia sesión</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;