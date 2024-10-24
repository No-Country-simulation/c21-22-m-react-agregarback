import sequelize from "../database/database.js";
import { QueryTypes } from "sequelize";
import Usuario from "../models/User.js";
import Mascota from "../models/Mascota.js";
import SolicitudAdopcion from '../models/SolicitudAdopcion.js';

const adoptionForm = async (req, res) => {

    console.log(req.body)

    // const { nombre, email, telefono, habitantesVivienda, animalesExtras, tipoVivienda, espacioVivienda, mensaje } = req.body

    // const usurioRegistrado = await Usuario.findOne({
    //     where: { email: email }
    // })

    // let datosUsuario = req.usuario
    // console.log(datosUsuario)
    // console.log(nombre)

    // if (usuarioToken) {
    //     const nuevaSolicitud = await SolicitudAdopcion.create({
    //         nombre,
    //         email,
    //         telefono,
    //         habitantesVivienda,
    //         animalesExtras,
    //         tipoVivienda,
    //         espacioVivienda,
    //         mensaje
    //     })

    // }

};

export default adoptionForm