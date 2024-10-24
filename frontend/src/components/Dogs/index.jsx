import "./style.css";
import React from "react";
import { useState, useEffect } from "react";
import { Card } from "./card";

const Dogs = () => {
  const [dogPic, setDogPic] = useState([""]);
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

  useEffect(() => {
    getDogPic();
    getDogData();
  }, []);

  const getDogPic = async () => {
    try {
      const response = await fetch(
        "https://api.thedogapi.com/v1/images/search?limit=10"
      );
      if (!response.ok) {
        console.error(response.statusText);
        return false;
      }
      const apiDogImage = await response.json();
      console.log("This are the images", apiDogImage);
      setDogPic(apiDogImage);
      return true;
    } catch (error) {
      console.error("Error", error);
      return false;
    }
  };

  const getDogData = async () => {
    try {
      const response = await fetch("https://dogapi.dog/api/v2/breeds");
      if (!response.ok) {
        console.error(response.statusText);
        return false;
      }
      const apiDogData = await response.json();
      console.log("This is the data with:", apiDogData);
      const currentDog = apiDogData.data;
      console.log("This dog has this attributes", currentDog);
      setDogData(currentDog);
      console.log("This is the dog data", currentDog);
      return true;
    } catch (error) {
      console.error("Error", error);
      return false;
    }
  };

  const requestAdoption = async () => {
    try {
      const response = await fetch(
        "https://findyourbestfriend.vercel.app/api/v1/adoption",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newAdoptionForm }),
        }
      );
      if (!response.ok) {
        console.error(response.statusText);
        return false;
      }
      const data = await response.json();
      console.log("User sent:", data);
      return true;
    } catch (error) {
      console.error("Error", error);
    }
  };

  const sendForm = async () => {
    if (fullName && email && phone && message) {
      const newAdoptionForm = {
        nombre: fullName,
        email: email,
        telefono: phone,
        selectedDog: selectedDog,
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

  const cardDogPic = (index) => {
    if (dogPic.length > 0) {
      return dogPic[index].url;
    }
    console.log("Error: no images found");
    return "";
  };

  const handleOpenModal = (dog) => {
    setSelectedDog(dog);
  };

  // HABILITA FORMULARIO
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
              <h2>¡Adopta a tu mejor amigo!</h2>
              <p className="h5 fw-normal">
                Ellos esperan por una familia capaz de darles todo el amor y el
                cuidado que se merecen. Aquí inicia tu camino para darles una
                segunda oportunidad. <br /> <br /> En esta sección podrás
                conocer a todos los perros que están disponibles y listos para
                ser adoptados. Tómate tu tiempo hasta encontrar al indicado para
                ti. Ábreles tu hogar, tú también puedes poner una patita para
                ayudarlos.{" "}
              </p>
            </div>
            <img
              className="adoption-image"
              src="public/assets/adopt-dog.png"
              style={{ width: "40%" }}
              alt="adoption-image"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="wrapper">
          {dogData.map((dog, index) => (
            <Card
              className="grid-item"
              key={dog.id}
              image={cardDogPic(index)}
              title={dog.attributes.name}
              body={dog.attributes.description}
              id={dog.id}
              handleOpenModal={handleOpenModal}
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
                  src={selectedDog.image}
                  alt="dog-image"
                  className="img-fluid rounded mx-auto d-block mt-0 mb-3 mw-50 h-50"
                />
                <div className="mx-4">
                  <div className="mb-3 text-justify">{selectedDog.body}</div>
                  <div className="mb-3">
                    <h5>
                      Para adoptar a {selectedDog.title}, llena el siguiente
                      formulario
                    </h5>
                  </div>
                  <form>
                    <div className="mb-3">
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          disabled={!isLoggedIn}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          type="text"
                          id="inputFullName"
                          className="form-control"
                          name="nombre"
                        />
                        <label
                          className="form-label fw-bold"
                          htmlFor="inputFullName"
                        >
                          Nomble completo
                        </label>
                      </div>
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                      <input
                        disabled={!isLoggedIn}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        name="email"
                      />
                      <label
                        className="form-label fw-bold"
                        htmlFor="inputEmail"
                      >
                        Email
                      </label>
                    </div>

                    <div className="form-outline" data-mdb-input-init>
                      <input
                        disabled={!isLoggedIn}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="tel"
                        id="inputPhone"
                        className="form-control"
                        name="telefono"
                      />
                      <label
                        className="form-label fw-bold"
                        htmlFor="inputPhone"
                      >
                        Teléfono
                      </label>
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
                      <label className="form-label fw-bold" htmlFor="homeSpace">
                        Cuentas con patio/jardin y/o terraza en tu vivienda?{" "}
                      </label>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold">Mensaje</label>
                      <textarea
                        disabled={!isLoggedIn}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
                    ? "Enviar solicitud de adopción"
                    : "Debes estar registrado para enviar una solicitud"}
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
