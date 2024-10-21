import sequelize from "../database/database.js";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";
import User from '../models/User.js'

const signUp = async (req, res) => {
    try {
        const { nombre, apellido, email, telefono, fechaNacimiento,password,direccion } = req.body;
console.log(req.body)
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
            telefono,
            fechaNacimiento,
            password: hash,
            direccion
        })
        res.status(201).json({
            code: 201,
            message: "Usuario creado con éxito",
            data: newUser
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


let controllers = {
    signUp,
    logIn,
    
};

export default controllers;
