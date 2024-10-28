import sequelize from "../database/database.js";
import { QueryTypes } from "sequelize";
import nodemailer from "nodemailer"
import Usuario from "../models/User.js";
import Mascota from "../models/Mascota.js";
import SolicitudAdopcion from '../models/SolicitudAdopcion.js';

let user = process.env.NODEMAILER_USER
let pass = process.env.NODEMAILER_PASSWORD


const adoptionForm = async (req, res) => {
    try {
        const { nombre, email, telefono, habitantesVivienda, animalesExtras, tipoVivienda, mensaje, espacioVivienda, mascotaId } = req.body.newAdoptionForm || req.body;

        let findUser = await Usuario.findOne({ where: { email: email } });

        const findPet = await Mascota.findByPk(mascotaId);
        const nombreMascota = findPet.dataValues.nombre
        if (!findPet) {
            return res.status(404).json({
                code: 404,
                message: "Mascota no encontrada"
            });
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
            usuarioId: findUser ? findUser.id : null,
            mascotaId: findPet.id
        });

        const responseMessage = findUser
            ? { createApplication }
            : {
                createApplication,
                message: `El Email: ${email}, no se encuentra registrado. Esta solicitud no quedará registrada en tu perfil`
            };

        res.json(responseMessage);

        sendEmail(email, nombreMascota);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ocurrió un error al procesar la solicitud." });
    }
};


const sendEmail = async (destinatario, mascota) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: user,
            pass: pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    await transporter.sendMail({
        from: '"From Best Friends" <bestfriend.nc.2024@gmail.com>',
        to: `${destinatario}`,
        subject: "Solicitud de adopcion",
        html: `<h4>Felicidades!!</h4>
                <p><strong>Hemos recibido tu solicitud para adoptar a ${mascota}</strong></p>
                <p><strong>Pronto tendras noticias sobre nosotros</strong></p>`

    });

    await transporter.sendMail({
        from: '"From Best Friends" <bestfriend.nc.2024@gmail.com>',
        to: "bestfriend.nc.2024@gmail.com",
        subject: `Solicitud de adopcion de ${destinatario}`,
        html: `<p>Hemos recibido una solicitud de ${destinatario}
                para adoptar a ${mascota}<p/>`

    });
}

export default adoptionForm;