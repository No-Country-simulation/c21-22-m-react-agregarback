import sequelize from "../database/database.js";
import { QueryTypes } from "sequelize";
import Usuario from "../models/User.js";
import Mascota from "../models/Mascota.js";

const findUser = async (req, res) => {
    try {
        const { nombre, email, telefono, habitantesVivienda, animalesExtras, tipoVivienda, espacioVivienda, mensaje } = req.body

        console.log(nombre, email, telefono, habitantesVivienda, animalesExtras, tipoVivienda, espacioVivienda, mensaje)
    } catch (error) {

    }
};

export default findUser