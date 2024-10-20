import "./style.css";
import React from "react";
import { useState, useEffect } from "react"
import { Card } from "./card";

const Dogs = () => {
  const [dogPic, setDogPic] = useState([""])
  const [dogData, setDogData] = useState([])
  const [selectedDog, setSelectedDog] = useState(null)

  useEffect(() => {
    getDogPic()
    getDogData()
  }, [])

  const getDogPic = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breed/hound/images")
      if (!response.ok) {
        console.error(response.statusText)
        return false
      }
      const apiDogImage = await response.json()
      console.log("This are the images", apiDogImage)
      setDogPic(apiDogImage.message)
      return true
    } catch (error) {
      console.error("Error", error)
      return false
    }
  }

  const getDogData = async () => {
    try {
      const response = await fetch("https://dogapi.dog/api/v2/breeds")
      if (!response.ok) {
        console.error(response.statusText)
        return false
      }
      const apiDogData = await response.json()
      console.log("This is the data with:", apiDogData)
      const currentDog = apiDogData.data
      console.log("This dog has this attributes", currentDog)
      setDogData(currentDog)
      console.log("This is the dog data", currentDog)
      return true
    } catch (error) {
      console.error("Error", error)
      return false
    }
  }
  const cardDogPic = (index) => {
    if (dogPic.length > 0) {
      return dogPic[index]
    }
    console.log("Error: no images found")
    return ""
  }

  const handleOpenModal = (dog) => {
    setSelectedDog(dog)
  }

  return (
    <div className="container-md">
      <div className="row mt-5 mb-3">
        <div className="col">
          <div className="d-flex justify-content-between">
            <div>
              <h2>¡Adopta a tu mejor amigo!</h2>
              <p>Ellos esperan por una familia capaz de darles todo el amor y el cuidado que se merecen. Aquí inicia tu camino para darles una segunda oportunidad. <br /> <br /> En esta sección podrás conocer a todos los perros que están disponibles y listos para ser adoptados. Tómate tu tiempo hasta encontrar al indicado para ti. Ábreles tu hogar, tú también puedes poner una patita para ayudarlos. </p>
            </div>
            <img className="adoption-image" src="public/assets/adopt-dog.png" style={{ width: "40%" }} alt="adoption-image" />

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
              <div className="modal-body d-flex">
                <img
                  src={selectedDog.image}
                  alt="dog-image"
                  className="img-fluid ms-3 mt-0"
                />
                <div className="mx-4">
                  <div className="mb-3">{selectedDog.body}</div>
                  <form>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Nombre completo</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <div id="emailHelp" className="form-text">No compartiremos tu correo con nadie.</div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Mensaje</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>                    
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => setSelectedDog(null)}
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-secondary"
                >
                  Cerrar
                </button>
                <button type="button" className="btn btn-success">
                  Adoptar
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