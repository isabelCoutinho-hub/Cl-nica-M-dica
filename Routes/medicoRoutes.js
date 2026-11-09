import { Router } from "express";
import { cadastrarMedico, listarMedicos, buscarMedicoId, atualizarMedico, excluirMedico } 
    from "../controller/medicoController.js";


const router = Router();

router.post("/medicos", cadastrarMedico);
router.get("/medicos", listarMedicos);
router.get("/medicos/:id", buscarMedicoId);
router.patch("/medicos/:id", atualizarMedico);
router.delete("/medicos/:id", excluirMedico);

export default router;