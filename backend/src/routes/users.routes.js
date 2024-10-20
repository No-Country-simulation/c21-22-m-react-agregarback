import { Router } from "express";
import { singUp, singIn } from "../controllers/users.controllers.js"
import singUpAuth from "../../middlewares/singUpAuth.middlewares.js";
const router = Router();

router.post("/singUp", singUp)
router.post("/SingIn", singUpAuth, singIn)

export default router;