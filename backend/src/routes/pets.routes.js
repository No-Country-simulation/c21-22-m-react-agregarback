
import { Router } from "express";
import petsControllers from "../controllers/pets.controllers.js";
import middlewareUpload from "../middlewares/uploadImage.middlewares.js"

const router = Router();

router.post("/", middlewareUpload.uploadImage, petsControllers.createPet);
router.put("/", petsControllers.updatePet);
router.get("/",petsControllers.findPet)

export default router;

