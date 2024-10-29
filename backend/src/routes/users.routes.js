import { Router } from "express";
import usuariosController from "../controllers/users.controllers.js"
import authController from "../middlewares/Auth.middlewares.js"


const router = Router();

router.post("/signup", usuariosController.signUp)
router.post("/login", authController.emitToken, usuariosController.logIn)
router.get("/", authController.verifyToken, usuariosController.getUser)


export default router;