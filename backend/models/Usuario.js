import { DataTypes, BOOLEAN } from "sequelize";
import sequelize from "../database/database.js";

const Usuario = sequelize.define(
    'Usuario',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nombre: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        fechaNacimiento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN(),
            allowNull: true,
            defaultValue: false,
            validate: {
                notEmpty: {
                    msg: "Campo admin no permite guardar valores vacíos.",
                },
            },
        },
    },
    {
        timestamps: true,
        tableName: "Usuarios",
    },
);

export default Usuario;