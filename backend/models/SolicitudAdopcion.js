import sequelize from "../src/database/database.js.js";
import { DataTypes, BOOLEAN } from "sequelize";

const SolicitudAdopcion = sequelize.define(
    "Solicitud",
    {
        idMascota: {
            type: DataTypes.INTEGER()
        },
        idUsuario: {
            type: DataTypes.INTEGER()
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