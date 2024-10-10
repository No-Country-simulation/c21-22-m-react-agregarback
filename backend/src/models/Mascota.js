import sequelize from "../database/database.js";
import { DataTypes, BOOLEAN } from "sequelize";

const Mascota = sequelize.define(
    "Mascotas",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombreMascota: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        especie: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        nivelDeEnergia: {
            type: DataTypes.STRING(50)
        },
        tamaño: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        raza: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        esterilizado: {
            type: DataTypes.BOOLEAN(),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        disponibilidad: {
            type: DataTypes.BOOLEAN(),
            allowNull: false
        }

    },
    {
        timestamps: true,
        tableName: "Mascotas",
    }

);

export default Mascota