import sequelize from "../database/database.js";
import {  QueryTypes } from "sequelize";
import Mascota from "../models/Mascota.js";
import * as middlewareUpload from "../middlewares/uploadImage.middlewares.js";



const createPet = async (req, res) => {

    try {
        let { nombre, imagen, especie, nivelDeEnergia, dimension, raza, esterilizado, descripcion, disponibilidad } = req.body
        let pet = await Mascota.create({
            nombre,
            imagen: req.rutaImagen,
            especie,
            nivelDeEnergia,
            dimension,
            raza,
            esterilizado,
            descripcion,
            disponibilidad
        })
        res.status(201).json({
            code: 201,
            message: "Mascota creada con exito.",
            data: pet
        })
    } catch (error) {
        console.log(error);
        middlewareUpload.deleteImage.deleteImage(req.imagen).then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            res.status(500).json({
                code: 500,
                message: "Producto no pudo ser creado.",
            });
        })
    };
};

const findPet = async (req, res) => {
    try {
        let allPets = await Mascota.findAll({
            attributes: ["id", "nombre", "imagen", "especie", "nivelDeEnergia", "dimension", "raza", "esterilizado", "descripcion", "disponibilidad"],
            raw: true
        })

        console.log(allPets)
        res.json({ data: allPets })
    } catch (error) {
        console.log(error)
    }
}


const updatePet = async (req, res) => {
    try {
        let { id, nombre, especie, nivelDeEnergia, dimension, raza, esterilizado, descripcion } = req.body
        let mascotaId = await Mascota.findByPk(id)
        res.json({ mascotaId })

    } catch (error) {

    };
};

let petsControllers = {
    createPet,
    findPet,
    updatePet
};

export default petsControllers;