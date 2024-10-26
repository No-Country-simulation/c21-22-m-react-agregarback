import express from "express";
import cors from "cors";
import morgan from "morgan";
import fileUpload from 'express-fileupload';
// const bodyParser = require("body-parser");

const app = express()

//IMPORT RUTAS
import users from './routes/users.routes.js'
import pet from './routes/pets.routes.js'
import adoptions from './routes/adoptions.routes.js'


import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());
app.use(morgan("tiny"));

//RUTA PUBLICA
app.use("/public", express.static(path.resolve(__dirname, "./public")));


app.get('/', (req, res) => {
    res.send("hola mundo")
})

//RUTAS
app.use('/api/v1/user', users)
app.use('/api/v1/pets', pet)
app.use('/api/v1/adoptions', adoptions)


export default app