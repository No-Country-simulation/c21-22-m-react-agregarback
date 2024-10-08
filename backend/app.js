import express from "express";

const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("hola mundo")
})

export default app