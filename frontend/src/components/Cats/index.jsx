import "./style.css";
import React from "react";
import { useState, useEffect } from "react"
import { Card } from "./card";

const Cats = () => {
  const [catPic, setCatPic] = useState([""])
  const [catData, setCatData] = useState([])
  const [selectedCat, setSelectedCat] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    getCatPic()
    getCatData()
  }, [])

  const getCatPic = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      if (!response.ok) {
        console.error(response.statusText)
        return false
      }
      const apiCatImage = await response.json()
      console.log("This are the images", apiCatImage)
      setCatPic(apiCatImage)
      return true
    } catch (error) {
      console.error("Error", error)
      return false
    }
  }

  const getCatData = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/breeds?limit=10&page=0")
      if (!response.ok) {
        console.error(response.statusText)
        return false
      }
      const apiCatData = await response.json()
      console.log("This is the data with:", apiCatData)
      const currentCat = apiCatData
      console.log("This cat has this attributes", currentCat)
      setCatData(currentCat)
      console.log("This is the cat data", currentCat)
      return true
    } catch (error) {
      console.error("Error", error)
      return false
    }
  }

  const requestAdoption = async () => {
    try {
      const response = await fetch('https://findyourbestfriend.vercel.app/api/v1/adoption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newAdoptionForm })
      })
      if (!response.ok) {
        console.error(response.statusText)
        return false
      }
      const data = await response.json()
      console.log("User sent:", data)
      return true
    } catch (error) {
      console.error("Error", error)
    }
  }

  const newAdoptionForm = {
    "name": fullName,
    "email": email,
    "phone": phone,
    "message": message
  }
  const sendForm = async () => {
    if (fullName && email && phone && message) {
      const result = await requestAdoption(newAdoptionForm)
      if (result) {
        alert("Tu solicitud ha sido enviada, pronto nos contactaremos contigo")
      } else {
        alert("No se pudo enviar la solicitud, recuerda llenar todos los campos")
      }
    }
  }

  const cardCatPic = (index) => {
    if (catPic && catPic.length >0 && index < catPic.length) {  
      return catPic[index].url; // Access the URL for the specific index }  
    } else {console.error("Image not found for index", index);  
      return ""
    }
  }

  const handleOpenModal = (cat) => {
    setSelectedCat(cat)
  }

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
          {catData.map((cat, index) => (
            <Card
              className="grid-item"
              key={cat.id}
              image={cardCatPic(index)}
              title={cat.name}
              body={cat.description}
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
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          type="text"
                          id="inputFullName"
                          className="form-control" />
                        <label className="form-label" htmlFor="inputFullName">Nomble completo</label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          id="inputEmail"
                          className="form-control" />
                        <label className="form-label" htmlFor="inputEmail">Email</label>
                      </div>
                      <div className="form-outline" data-mdb-input-init>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="tel"
                          id="inputPhone"
                          className="form-control" />
                        <label className="form-label" htmlFor="inputPhone">Teléfono</label>
                      </div>
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
                  }}
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn btn-secondary"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => sendForm()}
                  type="button"
                  className="btn btn-success">
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






export default Cats;