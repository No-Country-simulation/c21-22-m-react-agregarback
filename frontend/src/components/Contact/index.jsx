import "./style.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
    newsletter: ""
  });
  const [sending, setSending] = useState(false);
  const handleChange = e => {
  const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://formspree.io/f/xdkokqee", {
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
                title: "¡Tu consulta fue enviada con éxito!",
                html: "<p>Muchas gracias por ponerte en contacto con <b>Best Friend</b>. Pronto estaremos respondiendo tu consulta.</p>",
                showConfirmButton: false,
                timer: 4000
              });
            };
          })
            .finally(() => {
              setSending(false);
              setFormData({ contactName: "", contactEmail: "", contactMessage: "", newsletter: "" });
            });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Hubo un error al enviar tu consulta",
        showConfirmButton: false,
        timer: 2000,
      });
      setSending(false);
    };
  };
  return (
    <div className="contactSection">
    <div className="container mt-5">
      <div className="row">
        <div className="col-7">
          <div>
            <h3><b>¿Te interesa adoptar un gato o un perro?</b></h3>
            <p>
              Si estás interesado en iniciar el proceso de adopción o quisieras visitar nuestro refugio para conocer a nuestros peludos, por favor llena el formulario aquí abajo y nos pondremos en contacto contigo, para que puedas conocerlos y saber más de nuestro proyecto.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nombre completo</label>
              <input type="text" className="form-control" id="contactName" name="contactName" value={formData.contactName}
              onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
              <div className="form-text">No compartiremos tu correo con nadie.</div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Mensaje</label>
              <textarea className="form-control" id="contactMessage" name="contactMessage" value={formData.contactMessage} onChange={handleChange} rows="3" required />
            </div>
            <div className="mb-3 form-check fw-bold">
              <input type="checkbox" className="form-check-input" id="newsletter" name="newsletter" value={formData.newsletter} onChange={handleChange}/>
              <label className="form-check-label">Suscribirse a nuestro newsletter</label>
            </div>
            <button type="submit" disabled={sending} className="btn btn-dark mb-5">{sending ? "Enviando..." : "Enviar"}</button>
          </form>
        </div>
        <div className="col-5">
          <div>
            <h3><b>Información de contacto</b></h3>
            <p><b>Teléfono:</b> 614-891-528 <br /> <b>Email:</b> bestfriend@refugioanimal.org <br /> <b>Dirección:</b> La Turbinas I-255</p>
            <p></p>
            <p></p>
          </div>
          <div>
            <h3><b>Horario de atención</b></h3>
            <p><b>Lunes a viernes:</b> de 10:00 a 17:00</p>
            <p></p>            
          </div>
          <iframe
            className="rounded-2 border border-2"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3956.966678450137!2d-70.92197094694353!3d-34.59559939795614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e0!3m2!1sfr!2sec!4v1728662006395!5m2!1sfr!2sec"
            frameborder="0"
            width="80%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;


