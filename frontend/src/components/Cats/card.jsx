import React from "react"
import PropTypes from "prop-types"
import { useState, useEffect } from "react"



export const Card = ({ title, body, id, image, handleOpenModal }) => {
    return (
        <div className="card mx-2 mt-3" style={{ width: "24rem" }}>
            <img src={image} className="card-img-top" alt="card image" />
            <div className="card-body ">
                <h5 className="card-title h3">{title}</h5>
                <p className="card-text stick-to-bottom">{body}</p>

            </div>
            <div className="card-footer overflow-hidden d-flex justify-content-between">
                <button
                    className="btn btn-outline-info"
                    onClick={() => handleOpenModal({ title, body, image })}
                    data-toggle="modal"
                    data-target=".bd-adopt-modal-lg">Ver más</button>            
            </div>
        </div>
    )
}
