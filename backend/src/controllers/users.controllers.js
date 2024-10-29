import sequelize from "../database/database.js";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";
import User from '../models/User.js'
import SolicitudAdopcion from "../models/SolicitudAdopcion.js";

const signUp = async (req, res) => {

    try {
        const { nombre, apellido, email, password, telefono, direccion, fechaNacimiento } = req.body;

        const findUser = await User.findOne({ where: { email } });
        if (findUser) {
            return res.status(400).json({
                code: 400,
                message: "El email ingresado ya se encuentra registrado."
            });
        };

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            nombre,
            apellido,
            email,
            password: hash,
            telefono,
            direccion,
            fechaNacimiento
        })
        res.status(201).json({
            code: 201,
            message: "Usuario creado con éxito ",
            data: {
                id: newUser.id,
                nombre: newUser.nombre,
                apellido: newUser.apellido,
                email: newUser.email
            }
        });
    } catch (error) {
        console.log(error)
    }
}

const logIn = async (req, res) => {
    try {
        res.status(200).json({
            code: 200,
            message: "Login éxitoso.",
            usuario: req.usuario,
            token: req.token

        });

    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error en el proceso de autenticación.",
            error
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        let allUsers = await User.findAll({
            attributes: ["id", "nombre", "apellido", "fechaNacimiento", "email", "telefono", "direccion"],
            include: [{
                model: SolicitudAdopcion,
                attributes: ["id", "nombre", "estado",]
            }],
            raw: true
        })

        res.json({ data: allUsers })
    } catch (error) {
        console.log(error)
    }
}

let controllers = {
    signUp,
    logIn,
    getAllUsers

};

export default controllers;
