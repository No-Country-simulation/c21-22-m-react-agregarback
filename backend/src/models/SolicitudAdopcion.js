import sequelize from "../database/database.js";
import { DataTypes, BOOLEAN } from "sequelize";

const SolicitudAdopcion = sequelize.define(
    "Solicitud",    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        habitantesVivienda: {
            type: DataTypes.STRING(50),
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
        estado: {
            type: DataTypes.BOOLEAN(),
            allowNull: true,
            defaultValue: false,
        },
    },
    {
        timestamps: true,
        tableName: "Solicitudes",
    }
);

export default SolicitudAdopcion;