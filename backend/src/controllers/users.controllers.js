import sequelize from "../database/database.js";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";
import User from '../models/User.js'

const createUser = async (req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;

        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            nombre,
            apellido,
            email,
            password: hash
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

export default createUser;