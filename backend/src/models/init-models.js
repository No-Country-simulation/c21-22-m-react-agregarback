import Usuario from "./User.js";
import Mascota from "./Mascota.js";
import SolicitudAdopcion from "./SolicitudAdopcion.js";

Usuario.hasMany(SolicitudAdopcion, {
    foreignKey: "usuarioId"
});
SolicitudAdopcion.belongsTo(Usuario, {
    foreignKey: "usuarioId"
});

Mascota.hasMany(SolicitudAdopcion, {
    foreignKey: "mascotaId"
});
SolicitudAdopcion.belongsTo(Mascota, {
    foreignKey: "mascotaId"
});