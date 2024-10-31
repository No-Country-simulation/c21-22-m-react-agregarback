import "./style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [adoptions, setAdoptions] = useState([]);
  const token = localStorage.getItem("token");
  const getUser = async () => {
    try {
      const response = await fetch("https://c21-22-m-react-node.onrender.com/api/v1/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      });
      if (response.ok) {
        const data = await response.json();
        setName(data.userData.nombre);
        setLastname(data.userData.apellido);
        setEmail(data.userData.email);
        setTelephone(data.userData.telefono);
        setBirthDate(data.userData.fechaNacimiento);
        setAddress(data.userData.direccion);
        setAdoptions(data.userData.Solicituds);
      };
    } catch (error) {
      console.error("Error: ", error);
    };
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Sesión finalizada",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/");
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div class="profileSection">
      <h2>Mi Perfil</h2>
      <div class="card my-5">
        <div class="card-body">
          <h5 class="card-title">Bienvenido, <b>{name} {lastname}</b></h5>
          <p class="card-text"><b>Email:</b> {email}</p>
          <p class="card-text"><b>Teléfono:</b> {telephone}</p>
          <p class="card-text"><b>Fecha de Nacimiento:</b> {birthDate}</p>
          <p class="card-text"><b>Dirección:</b> {address}</p>
          <p class="card-text"><b>Adopciones en Proceso:</b> {adoptions.length}</p>
          <button onClick={handleLogout} class="btn btn-dark">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;