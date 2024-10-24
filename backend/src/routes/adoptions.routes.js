import { Router } from "express";
import adoption from "../controllers/adoptions.controllers.js"



const router = Router();

router.post("/form", adoption)
// router.post("/form", usuariosController.signUp)
// router.post("/login", authController.emitToken, usuariosController.logIn)


export default router;