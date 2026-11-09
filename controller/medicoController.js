import { Medico } from '../model/Medico.js';
import { cadastrar, listar } from '../repository/consultaRepository';
import * as medicoRepository from '../repository/medicoRepository.js';

export async function cadastrarMedico(req, res) {
    try {
        const { nome, especialidade, crm } = req.body;
        
        if (!nome || !especialidade || !crm) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }
    const medico = new Medico(null, nome, especialidade, crm);
    const id = await cadastrar(medico);

    res.status(201).json({ id_medico: id, message: "Médico cadastrado com sucesso." });

    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar médico." });
    }
}

export async function listarMedicos(req, res) {
    try {
        const medicos = await listar();
        return res.status(200).json(medicos);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao listar médicos." });
    }
}

export async function buscarMedicoId(req, res) {
    try {
        const medicos = await buscarPorId(req.params.id);

        if (!medicos) {
            return res.status(404).json({ error: "Médico não encontrado." });
        }
        return res.status(200).json(medicos);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar médico." });
    }
}

export async function atualizarMedico(req, res) {
    try {
        const { nome, especialidade, crm } = req.body;

        if (!nome || !especialidade || !crm) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }
    const medico = new Medico(req.params.id, nome, especialidade, crm);
    const linhasAlteradas = await atualizar(req.params.id, medico);

    if (linhasAlteradas === 0) {
        return res.status(404).json({ error: "Médico não encontrado." });
    }
    return res.status(200).json({ message: "Médico atualizado com sucesso." });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao atualizar médico." });
    }
}

export async function excluirMedico(req, res) {
    try {
        const linhasExcluidas = await excluir(req.params.id);

        if (linhasexcluidas === 0 ) {
            return res.status(404).json({ error: "Médico não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ error: "Erro ao excluir médico." });
    }
}