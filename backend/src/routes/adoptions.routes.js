import { Router } from "express";
import adoptionForm from "../controllers/adoptions.controllers.js"
import middleware from "../middlewares/Auth.middlewares.js"



const router = Router();

router.post("/form", middleware.verifyToken, adoptionForm)



export default router;