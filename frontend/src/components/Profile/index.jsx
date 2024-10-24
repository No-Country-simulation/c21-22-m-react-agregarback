import "./style.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("Sesión cerrada");
    navigate("/");
  };
  return (
    <div class="profileSection">
      <h2>Mi Perfil</h2>
      <div class="card my-5">
        <div class="card-body">
          <h5 class="card-title">Bienvenido, <b>[Nombre Apellido]</b></h5>
          <p class="card-text"><b>Email:</b> [email@ejemplo.com]</p>
          <p class="card-text"><b>Teléfono:</b> [+54 9 11 1234 5678]</p>
          <p class="card-text"><b>Fecha de Nacimiento:</b> [01/01/1990]</p>
          <p class="card-text"><b>Dirección:</b> [Calle Falsa 123, Buenos Aires, Argentina]</p>
          <p class="card-text"><b>Adopciones en Proceso:</b> [2]</p>
          <p class="card-text"><b>Mascotas Adoptadas:</b> [0]</p>
          <button onClick={handleLogout} class="btn btn-dark">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;