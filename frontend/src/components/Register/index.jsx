import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
    direccion: "",
    password: ""
  });
  const navigate = useNavigate(); 
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  console.log(formData);
  const handleSubmit = async e => {
    e.preventDefault(); 
    try {
      const response = await fetch("https://c21-22-m-react-node.onrender.com/api/v1/user/signup", {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro exitoso",
          showConfirmButton: false,
          timer: 2000
        });
        navigate("/login");  
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 2000
        });
      };
    } catch (error) {
      console.error("Error: ", error);
      alert("Error en la solicitud. Por favor, intenta de nuevo.");
    };
  };
  return (
    <div className="registerSection">
      <h2>Únete a la comunidad de <b>Best Friend</b></h2>
      <h5>Crea una cuenta para conocer a nuestros peludos y enviar solicitudes de adopción</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label fw-bold">Apellido</label>
          <input type="text" className="form-control" id="apellido" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label fw-bold">Teléfono</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="fechaNacimiento" className="form-label fw-bold">Fecha de Nacimiento</label>
          <input type="date" className="form-control" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label fw-bold">Dirección</label>
          <input type="text" className="form-control" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-bold">Contraseña</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="registerButton">
          <button type="submit" className="btn btn-dark">Registrarse</button>
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