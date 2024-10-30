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
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://res.cloudinary.com/dyhbfhsss/image/upload/v1728990796/drlydhuy0g711fyhlpds.png",           
        },
        especie: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        nivelDeEnergia: {
            type: DataTypes.STRING(50)
        },
        dimension: {
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