import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
import { createCompany, updateCompany, generateCompaniesReport } from './company-controller.js';
import { validarJWT } from "../middlewares/validar.jwt.js";
import {existeCompanyById} from "../helpers/db-validator.js"

const router = Router();

router.post("/registerCompany" )


router.post(
    "/", 
    [
        validarJWT,
        validarCampos
        
    ],
    createCompany
);


router.put(
    "/:id",
    uploadProfilePicture.single('profilePicture'),
    [
        check("id", "No es un ID válido").isMongoId(),
        check("id").custom(existeCompanyById),
        validarCampos
    ],
    updateCompany
)


router.post(
    "/generate-report", 
    [
        validarJWT,  
        validarCampos  
    ],
    generateCompaniesReport
);


export default router;