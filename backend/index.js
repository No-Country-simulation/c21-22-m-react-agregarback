import app from "./src/app.js";
import db from "./src/database/database.js"

import './src/models/init-models.js'


const PORT = process.env.PORT || 3000

const main = async (req, res) => {
    try {

        await db.authenticate();
        await db.sync({ force: false, alter: true });
        app.listen(PORT, () => {
            console.log("Servidor escuchando en puerto: " + PORT);
        });
    } catch (error) {
        console.log("Error crearUsuario", error);
       
    }
};

main();