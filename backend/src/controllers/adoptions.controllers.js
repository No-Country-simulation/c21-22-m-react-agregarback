import sequelize from "../database/database.js";
import { QueryTypes } from "sequelize";
import Usuario from "../models/User.js";
import Mascota from "../models/Mascota.js";
import SolicitudAdopcion from '../models/SolicitudAdopcion.js';

const adoptionForm = async (req, res) => {


    try {

        const { nombre, email, telefono, habitantesVivienda, animalesExtras, tipoVivienda, mensaje, espacioVivienda, mascotaId } = req.body.newAdoptionForm || req.body

        let findUser = await Usuario.findOne({ where: { email: email } })

        if (!findUser) {
            findUser = null
            // return res.status(404).json({ 
            //     code: 404 ,
            //     message: `El Email: ${email}, no se encuentra registrado. Esta solicitud no quedara registrada en tu perfil`
            // })
        }
        const findPet = await Mascota.findByPk(mascotaId)

        if(!findPet){
            return res.status(404).json({
                code:404,
                message :"Mascota no encontrada"
            })
        }
        const createApplication = await SolicitudAdopcion.create({
            nombre,
            email,
            telefono,
            habitantesVivienda,
            animalesExtras,
            tipoVivienda,
            mensaje,
            espacioVivienda,
            usuarioId: findUser.id,
            mascotaId: findPet.id
        })
        res.json({ createApplication })
    } catch (error) {
        console.log(error)
    }


};

export default adoptionForm