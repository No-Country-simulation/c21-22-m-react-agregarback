import app from "./src/app.js";
import db from "./src/database/database.js"

import './src/models/init-models.js'


const PORT = 3000

const main = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: true, alter: true });
        app.listen(PORT, () => {
            console.log("Servidor escuchando en puerto: " + PORT);
        });
    } catch (error) {
        console.log("Error crearUsuario", error);
        res.status(500).json({
            code: 500,
            message: "Error al crear el nuevo usuario, verifique los datos ingresados."
        });
    }
};

main()