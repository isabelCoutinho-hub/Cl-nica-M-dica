import { Router } from "express"; 
import { cadastrarConsulta, listarConsultas, buscarConsultaId, atualizarConsulta, excluirConsulta }
    from "../controller/consultaController.js";

const router = Router();

router.post("/consultas", cadastrarConsulta);
router.get("/consultas", listarConsultas);
router.get("/consultas/:id", buscarConsultaId);
router.patch("/consultas/:id", atualizarConsulta);
router.delete("/consultas/:id", excluirConsulta);

export default router;