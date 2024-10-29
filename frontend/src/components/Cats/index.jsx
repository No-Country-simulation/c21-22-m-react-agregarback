import "./style.css";
import React from "react";
import { useState, useEffect } from "react"
import { Card } from "./card";

const Cats = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [catData, setCatData] = useState([])
  const [selectedCat, setSelectedCat] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [population, setPopulation] = useState("");
  const [extrapets, setextraPets] = useState("");
  const [housingType, setHousingType] = useState("");
  const [homeSpace, setHomeSpace] = useState("");

  const getCatData = async () => {
    try {
      const response = await fetch("https://c21-22-m-react-node.onrender.com/api/v1/pets")
      if (!response.ok) {
        console.error(response.statusText)
        return false
      }
      const apiCatData = await response.json()
      console.log("This is the data with:", apiCatData)
      const currentCat = apiCatData.data
      console.log("This cat has this attributes", currentCat)
      setCatData(currentCat)
      console.log("This is the cat data", currentCat)
      return true
    } catch (error) {
      console.error("Error", error)
      return false
    }
  }

  const requestAdoption = async (newAdoptionForm) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://c21-22-m-react-node.onrender.com/api/v1/adoptions/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newAdoptionForm }),
          Authorization: `Bearer ${token}`,
        }
      );
      if (!response.ok) {
        console.error(response.statusText);
        // return false;
      }
      const data = await response.json();
      console.log("User sent:", data);
      return true;
    } catch (error) {
      console.error("Error", error);
    }
  };

  const sendForm = async () => {
    if (fullName || email || phone || message) {
      const newAdoptionForm = {
        nombre: fullName,
        email: email,
        telefono: phone,
        //selectedDog: selectedDog,
        habitantesVivienda: population,
        animalesExtras: extrapets,
        tipoVivienda: housingType,
        espacioVivienda: homeSpace,
        mensaje: message,
      };

      const result = await requestAdoption(newAdoptionForm);
      if (result) {
        alert("Tu solicitud ha sido enviada, pronto nos contactaremos contigo");
      } else {
        alert(
          "No se pudo enviar la solicitud, recuerda llenar todos los campos"
        );
      }
    } else {
      alert("Por favor completa todos los campos obligatorios.");
    }
  };


  const handleOpenModal = (cat) => {
    setSelectedCat(cat)
  }

  useEffect(() => {
    getCatData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="container-md mb-5">
      <div className="row mt-5 mb-3">
        <div className="col">
          <div className="d-flex justify-content-between">
            <div>
              <h2>¡Encuentra a ese gatito que será tu nuevo mejor amigo!</h2>
              <p className="h5 fw-normal">Ellos anhelan encontrar un hogar lleno de amor y cariños que les brinde la atención que necesitan. Aquí comienza tu viaje para ofrecerles una nueva vida. <br /> <br /> En esta sección podrás descubrir a todos los gatitos que esperan ser adoptados. Tómate tu tiempo para hallar al felino perfecto para ti. Ábreles tu corazón, ¡tú también puedes hacer la diferencia en su vida! </p>
            </div>
            <img className="adoption-image" src="public/assets/adopt-cat.png" style={{ width: "40%" }} alt="adoption-image" />

          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          {catData.filter(cat => cat.especie === "gato").map((cat, index) => (
            <Card
              className="grid-item"
              key={cat.id}
              image={cat.imagen}
              title={cat.nombre}
              body={cat.descripcion}
              id={cat.id}
              handleOpenModal={handleOpenModal}
              type="cats"
            />
          ))}
        </div>
      </div>

      {selectedCat && (
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
                  {selectedCat.title}
                </h5>
                <button
                  onClick={() => setSelectedCat(null)}
                  type="button"
                  className="btn-close me-3"
                  data-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="container-sm modal-body d-flex flex-column">
                <img
                  src={selectedCat.image}
                  alt="cat-image"
                  className="img-fluid rounded mx-auto d-block mt-0 mb-3 mw-50 h-50"
                />
                <div className="mx-4">
                  <div className="mb-3 text-justify">{selectedCat.body}</div>
                  <form>
                    <div className="mb-3">
                      <h5>Para adoptar a {selectedCat.title}, llena el siguiente formulario</h5>
                    </div>
                    <div className="mb-3">
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          disabled={!isLoggedIn}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          type="text"
                          id="inputFullName"
                          name="nombre"
                          className="form-control" />
                        <label className="form-label" htmlFor="inputFullName">Nomble completo</label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          disabled={!isLoggedIn}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          id="inputEmail"
                          name="email"
                          className="form-control" />
                        <label className="form-label" htmlFor="inputEmail">Email</label>
                      </div>
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          disabled={!isLoggedIn}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="tel"
                          id="inputPhone"
                          name="telefono"
                          className="form-control" />
                        <label className="form-label" htmlFor="inputPhone">Teléfono</label>
                      </div>
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                      <input
                        disabled={!isLoggedIn}
                        value={population}
                        onChange={(e) => setPopulation(e.target.value)}
                        type="number"
                        id="population"
                        className="form-control"
                        name="habitantesVivienda"
                      />
                      <label
                        className="form-label fw-bold"
                        htmlFor="population"
                      >
                        Cuantas personas habitan en su hogar
                      </label>
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                      <input
                        disabled={!isLoggedIn}
                        value={extrapets}
                        onChange={(e) => setextraPets(e.target.value)}
                        type="text"
                        id="extraPets"
                        className="form-control"
                        name="animalesExtras"
                      />
                      <label className="form-label fw-bold" htmlFor="extraPets">
                        Actualmente cuenta con mas animalitos en la casa?
                        <br></br>
                        <p>(si su respuesta es sí, especifique)</p>
                      </label>
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                      <input
                        disabled={!isLoggedIn}
                        value={housingType}
                        onChange={(e) => setHousingType(e.target.value)}
                        type="text"
                        id="housingType"
                        className="form-control"
                        name="tipoVivienda"
                      />
                      <label
                        className="form-label fw-bold"
                        htmlFor="housingType"
                      >
                        Actualmente vives en casa o departamento?
                      </label>
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                      <input
                        disabled={!isLoggedIn}
                        value={homeSpace}
                        onChange={(e) => setHomeSpace(e.target.value)}
                        type="text"
                        id="homeSpace"
                        className="form-control"
                        name="espacioVivienda"
                      />
                      <label
                        className="form-label fw-bold"
                        htmlFor="homeSpace"
                      >
                        Cuentas con patio/jardin y/o terraza en tu vivienda?{" "}
                      </label>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Mensaje</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                        id="inputMessage"
                        rows="3"></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => {
                    setSelectedCat(null);
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
                  disabled={!isLoggedIn}
                  onClick={() => sendForm()}
                  type="submit"
                  className="btn btn-success"
                >
                  {isLoggedIn
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






export default Cats;