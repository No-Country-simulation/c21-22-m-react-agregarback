import sequelize from "../database/database.js";
import { DataTypes, BOOLEAN } from "sequelize";

const SolicitudAdopcion = sequelize.define(
    "Solicitud", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    habitantesVivienda: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    animalesExtras: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    tipoVivienda: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    espacioVivienda: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    mensaje: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    estado: {
        type: DataTypes.BOOLEAN(),
        allowNull: true,
        defaultValue: true,
    },
},
    {
        timestamps: true,
        tableName: "Solicitudes",
    }
);

export default SolicitudAdopcion;