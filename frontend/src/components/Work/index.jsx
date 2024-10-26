import "./style.css";
import { useState } from "react";

const Work = () => {
  const [formData, setFormData] = useState({
    workName: "",
    workEmail: "",
    workTelephone: "",
    workCv: "",
    workMessage: ""
  });
  const [sending, setSending] = useState(false);
  const handleChange = e => {
  const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    fetch("https://formspree.io/f/xdkokqee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify(formData)
      })
      .then(response => {
      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Postulación enviada con éxito",
          showConfirmButton: false,
          timer: 2000
        });
      };
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Hubo un error al enviar tu postulación",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => {
        setSending(false);
        setFormData({ workName: "", workEmail: "", workTelephone: "", workCv: "", workMessage: "" });
      });
    };
  return (
    <div className="work">
      <h3><b>Trabaja con nosotros</b></h3>
      <p>¿Te apasionan los animales y quieres formar parte de un equipo comprometido en transformar vidas?
      <br />
      <br />
      En <b>Best Friend</b>, buscamos personas motivadas para sumarse a nuestro proyecto y ayudarnos a hacer posible que cada mascota encuentre su hogar ideal.</p>
      <h5><b>Postúlate hoy llenando este formulario</b></h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre completo</label>
          <input type="text" className="form-control" id="workName" name="workName" value={formData.workName}
            onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input type="email" className="form-control" id="workEmail" name="workEmail" value={formData.workEmail} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Teléfono</label>
          <input type="tel" className="form-control" id="workTelephone" name="workTelephone" value={formData.workTelephone}
            onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Adjunta tu CV</label>
          <input type="file" className="form-control" id="workCv" name="workCv" accept=".pdf, .doc, .docx" value={formData.workCv}
            onChange={handleChange} required />
          <div className="form-text files">Solo archivos .pdf, .doc, .docx.</div>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Mensaje (opcional)</label>
          <textarea className="form-control" id="workMessage" name="workMessage" rows="3" value={formData.workMessage}
            onChange={handleChange}></textarea>
        </div>
        <button type="submit" disabled={sending} className="btn btn-dark mb-5">{sending ? "Enviando..." : "Enviar"}</button>
      </form>
    </div>
  );
};

export default Work;