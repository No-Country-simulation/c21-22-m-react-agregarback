import "./style.css";
import { useState } from "react";

const CreatePet = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        imagen: "",
        especie: "",
        nivelDeEnergia: "",
        dimension: "",
        raza: "",
        esterilizado: "",
        descripcion: "",
        disponibilidad: ""
      });
      const [sending, setSending] = useState(false);
      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
      console.log(formData);
      const handleSubmit = async e => {
        e.preventDefault();
        setSending(true);
        try {
          const response = await fetch("https://90a700ed63e21edb70dc7446e40da716.serveo.net/api/v1/pets", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
          });
          await response.json();
          if (response.ok) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Mascota creada con éxito",
              showConfirmButton: false,
              timer: 2000
            });
            setSending(false);
            setFormData({ nombre: "", imagen: "", especie: "", nivelDeEnergia: "", dimension: "", raza: "", esterilizado: "", descripcion: "", disponibilidad: "" });
          };
        } catch (error) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Hubo un error al crear la mascota",
            showConfirmButton: false,
            timer: 2000
          });
          setSending(false);
        };
      };
  return (
    <div className="createPet">
      <h3><b>Crea una mascota</b></h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Imagen</label>
          <input type="file" className="form-control" id="imagen" name="imagen" accept="image/*" value={formData.imagen}
            onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Especie</label>
          <select className="form-control" id="especie" name="especie" value={formData.especie} onChange={handleChange} required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Nivel de energía</label>
          <select className="form-control" id="nivelDeEnergia" name="nivelDeEnergia" value={formData.nivelDeEnergia} onChange={handleChange} required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Dimensión</label>
          <select className="form-control" id="dimension" name="dimension" value={formData.dimension} onChange={handleChange} required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="grande">Grande</option>
            <option value="mediano">Mediano</option>
            <option value="pequeño">Pequeño</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Raza</label>
          <input type="text" className="form-control" id="raza" name="raza" value={formData.raza} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Esterilizado</label>
          <select className="form-control" id="esterilizado" name="esterilizado" value={formData.esterilizado} onChange={handleChange} required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Descripción</label>
          <input type="text" className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Disponible</label>
          <select className="form-control" id="disponibilidad" name="disponibilidad" value={formData.disponibilidad} onChange={handleChange} required>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" disabled={sending} className="btn btn-dark mb-5">{sending ? "Creando..." : "Crear"}</button>
      </form>
    </div>
  );
};

export default CreatePet;