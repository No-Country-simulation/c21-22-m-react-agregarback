import "./style.css";
import { useState, useEffect } from "react";
import { Card } from "./card";
import dog from "/assets/adopt-dog.png?url";

const Dogs = ({ isAuth }) => {
  const [dogData, setDogData] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [population, setPopulation] = useState("");
  const [extrapets, setextraPets] = useState("");
  const [housingType, setHousingType] = useState("");
  const [homeSpace, setHomeSpace] = useState("");
  const getDogData = async () => {
    try {
      const response = await fetch("https://c21-22-m-react-node.onrender.com/api/v1/pets")
      if (!response.ok) {
        console.error(response.statusText);
        return false;
      };
      const apiDogData = await response.json();
      const currentDog = apiDogData.data;
      setDogData(currentDog);
      return true;
    } catch (error) {
      console.error("Error: ", error);
      return false;
    };
  };
  const requestAdoption = async newAdoptionForm => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://c21-22-m-react-node.onrender.com/api/v1/adoptions/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ newAdoptionForm })
        }
      );
      if (!response.ok) {
        console.error(response.statusText);
        return false;
      };
      const data = await response.json();
      console.log("User sent: ", data);
      return true;
    } catch (error) {
      console.error("Error: ", error);
    };
  };
  const sendForm = async () => {
    if (fullName && email && phone && message && selectedDog) {
      const newAdoptionForm = {
        nombre: fullName,
        email: email,
        telefono: phone,
        habitantesVivienda: population,
        animalesExtras: extrapets,
        tipoVivienda: housingType,
        espacioVivienda: homeSpace,
        mensaje: message,
        mascotaId: selectedDog.id
      };
      const result = await requestAdoption(newAdoptionForm);
      if (result) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "¡Tu solicitud fue enviada con éxito!",
          html: "<p>Muchas gracias por confiar en nosotros. Pronto nos pondremos en contacto contigo.</p>",
          showConfirmButton: false,
          timer: 2000
        });
       } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "No se pudo enviar la solicitud, recuerda llenar todos los campos",
          showConfirmButton: false,
          timer: 2000
        });
      };
    };
  };
  const handleOpenModal = dog => {
    setSelectedDog(dog);
  };
  useEffect(() => {
    getDogData();
  }, []);
  return (
    <div className="dogs container-lg mb-5">
      <div className="row text-start mt-3 mb-3">
        <div className="col">
          <div className="d-flex justify-content-between">
            <div>
              <h2><b>Perros en adopción</b></h2>
              <p className="h5 fw-normal">Ellos esperan por una familia capaz de darles todo el amor y el cuidado que se merecen. Aquí inicia tu camino para darles una segunda oportunidad.
                <br /><br />
              En esta sección podrás conocer a todos los perritos que están disponibles y listos para ser adoptados. Tómate tu tiempo hasta encontrar al indicado para ti. Ábreles tu hogar, <b>¡tú también puedes poner una patita para ayudarlos!</b></p>
            </div>
            <img
              className="adoption-image"
              src={dog}
              style={{ width: "40%" }}
              alt="adoption-image"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          {dogData.filter(dog => dog.especie !== "gato").map((dog, index) => (
            <Card
              className="grid-item"
              key={dog.id}
              image={dog.imagen}
              title={dog.nombre}
              body={dog.descripcion}
              id={dog.id}
              handleOpenModal={() => handleOpenModal(dog)}
              type="dogs"
            />
          ))}
        </div>
      </div>
      {selectedDog && (
        <div
          className="modal fade bd-adopt-modal-lg show"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title ms-3 display-6 fw-bold">
                  {selectedDog.title}
                </h5>
                <button
                  onClick={() => setSelectedDog(null)}
                  type="button"
                  className="btn-close me-3"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="container-sm modal-body d-flex flex-column">
                <img
                  src={selectedDog.imagen}
                  alt="dog-image"
                  className="img-fluid rounded mx-auto d-block mt-0 mb-3 mw-50"
                />
                <div className="mx-4">
                  <h3 className="mb-3 text-justify">{selectedDog.nombre}</h3>
                  <p><strong>Tamaño:</strong> {selectedDog.dimension}</p>
                  <p> <strong>Nivel de energía:</strong> {selectedDog.nivelDeEnergia}</p>
                  <div className="mb-3 text-justify">{selectedDog.descripcion}</div>
                  <div className="mb-3">
                    <h5>
                      Para adoptar a {selectedDog.nombre}, llena el siguiente
                      formulario:                 
                    </h5>
                  </div>
                  <form>
                    <div className="mb-3" data-mdb-input-init>
                      <label
                        className="form-label fw-bold"
                        htmlFor="inputFullName"
                      >
                        Nombre completo
                      </label>
                      <input
                        disabled={!isAuth}
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        type="text"
                        id="inputFullName"
                        className="form-control"
                        name="nombre"
                      />
                    </div>
                    <div className="mb-3" data-mdb-input-init>
                      <label
                        className="form-label fw-bold"
                        htmlFor="inputEmail"
                      >
                        Email
                      </label>
                      <input
                        disabled={!isAuth}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        name="email"
                      />
                    </div>
                    <div className="mb-3" data-mdb-input-init>
                      <label
                        className="form-label fw-bold"
                        htmlFor="inputPhone"
                      >
                        Teléfono
                      </label>
                      <input
                        disabled={!isAuth}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        type="tel"
                        id="inputPhone"
                        className="form-control"
                        name="telefono"
                      />
                    </div>
                    <div className="mb-3" data-mdb-input-init>
                      <label
                        className="form-label fw-bold"
                        htmlFor="population"
                      >
                        ¿Cuántas personas habitan en tu hogar?
                      </label>
                      <input
                        disabled={!isAuth}
                        value={population}
                        onChange={e => setPopulation(e.target.value)}
                        type="number"
                        id="population"
                        className="form-control"
                        name="habitantesVivienda"
                      />
                    </div>
                    <div className="mb-3" data-mdb-input-init>
                      <label className="form-label fw-bold" htmlFor="extraPets">
                        ¿Cuentas con más animalitos en la casa?
                        <br></br>
                        <p>(Si tu respuesta es sí, especifica)</p>
                      </label>
                      <input
                        disabled={!isAuth}
                        value={extrapets}
                        onChange={e => setextraPets(e.target.value)}
                        type="text"
                        id="extraPets"
                        className="form-control"
                        name="animalesExtras"
                      />
                    </div>
                    <div className="mb-3" data-mdb-input-init>
                      <label
                        className="form-label fw-bold"
                        htmlFor="housingType"
                      >
                        ¿Vives en casa o departamento?
                      </label>
                      <input
                        disabled={!isAuth}
                        value={housingType}
                        onChange={e => setHousingType(e.target.value)}
                        type="text"
                        id="housingType"
                        className="form-control"
                        name="tipoVivienda"
                      />
                    </div>
                    <div className="mb-3" data-mdb-input-init>
                      <label className="form-label fw-bold" htmlFor="homeSpace">
                        ¿Cuentas con patio/jardín/terraza en tu vivienda?
                      </label>
                      <input
                        disabled={!isAuth}
                        value={homeSpace}
                        onChange={e => setHomeSpace(e.target.value)}
                        type="text"
                        id="homeSpace"
                        className="form-control"
                        name="espacioVivienda"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Mensaje</label>
                      <textarea
                        disabled={!isAuth}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="form-control"
                        id="inputMessage"
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => {
                    setSelectedDog(null);
                    setFullName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setPopulation("");
                    setextraPets("");
                    setHousingType("");
                    setHomeSpace("");
                  }}
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-secondary"
                >
                  Cerrar
                </button>
                <button
                  disabled={!isAuth}
                  onClick={() => sendForm()}
                  type="submit"
                  className="btn btn-success"
                >
                  {isAuth
                    ? "Enviar solicitud"
                    : "Regístrate para aplicar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dogs;


