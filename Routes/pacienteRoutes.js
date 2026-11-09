import { Router } from "express";
import { cadastrarPaciente, listarPacientes, buscarPacienteId, atualizarPaciente, excluirPaciente }
    from "../controller/pacienteController.js";

const router = Router();

router.post("/pacientes", cadastrarPaciente);
router.get("/pacientes", listarPacientes);
router.get("/pacientes/:id", buscarPacienteId);
router.patch("/pacientes/:id", atualizarPaciente);
router.delete("/pacientes/:id", excluirPaciente);

export default router;