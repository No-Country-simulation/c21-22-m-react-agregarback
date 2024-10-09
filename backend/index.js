import app from "./app.js";
import db from "./database/database.js"


const PORT = 3000

const main = async () => {
    try {
        await db.authenticate();
        await db.sync({ force: true, alter: false });
        app.listen(PORT, () => {
            console.log("Servidor escuchando en puerto: " + PORT);
        });
    } catch (error) {
        console.log("Ha ocurrido un error: ", error);
    }
};

main();