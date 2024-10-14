import "./style.css";
import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7">
          <div>
            <h3><b>¿Te interesa adoptar un gato o un perro?</b></h3>
            <p>
              Si estás intersado en iniciar el proceso de adopción o quisieras visitar nuestro refugio para conocer a nuestros peludos, por favor llena el formulario aquí abajo y nos pondremos en contacto contigo, para que puedas conocerlos y saber más de nuestro proyecto.
            </p>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label">Suscribirse a nuestro newsletter</label>
            </div>
            <button type="submit" className="btn btn-dark mb-5">Enviar</button>
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
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div >
  );
};

export default Contact;


