import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginSection">
      <h5>Inicia sesión para gestionar tus solicitudes de adopción, descubrir nuevos compañeros y seguir de cerca a las mascotas que has seleccionado</h5>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label fw-bold">Email</label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fw-bold">Contraseña</label>
          <input type="password" class="form-control" id="password" required />
        </div>
        <div className="loginButton">
          <button type="submit" class="btn btn-dark">Iniciar sesión</button>
        </div>
      </form>
      <div>
        <p>¿No tienes una cuenta?
          <br />
          <Link to="/register">
            <u>Regístrate</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;