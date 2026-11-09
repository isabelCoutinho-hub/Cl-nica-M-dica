import { Paciente } from "../model/Paciente.js";
import * as pacienteRepository from "../repository/pacienteRepository.js";

export async function cadastrarPaciente(req, res) {
    try {
        const { nome, dataNascimento, cpf } = req.body;

        if (!nome || !dataNascimento || !cpf) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }
    const paciente = new Paciente(null, nome, dataNascimento, cpf);
    const id = await cadastrar(paciente);

    res.status(201).json({ id_paciente: id, message: "Paciente cadastrado com sucesso." });

    } catch (error) {
        res.status(500).json({ error: "Erro ao cadastrar paciente." });
    }
}

export async function listarPacientes(req, res) {
    try {
        const pacientes = await listar();
        return res.status(200).json(pacientes);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao listar pacientes." });
    }
}

export async function buscarPacienteId(req, res) {
    try {
        const pacientes = await buscarPorId(req.params.id);

        if (!pacientes) {
            return res.status(404).json({ error: "Paciente não encontrado." });
        }
        return res.status(200).json(pacientes);
    } catch (error) {
        return res.status(500).json({ error: "Erro ao buscar paciente." });
    }
}

export async function atualizarPaciente(req, res) {
    try {
        const { nome, dataNascimento, cpf } = req.body;

        if (!nome || !dataNascimento || !cpf) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }
    const paciente = new Paciente(req.params.id, nome, dataNascimento, cpf);
    const linhasAlteradas = await atualizar(req.params.id, paciente);

    if (linhasAlteradas === 0) {
        return res.status(404).json({ error: "Paciente não encontrado." });
    }
    return res.status(200).json({ message: "Paciente atualizado com sucesso." });
    } catch (error) {
        return res.status(500).json({ error: "Erro ao atualizar paciente." });
    }
}

export async function excluirPaciente(req, res) {
    try {
        const linhasExcluidas = await excluir(req.params.id);

        if (linhasExcluidas === 0 ) {
            return res.status(404).json({ error: "Paciente não encontrado." });
        }
    } catch (error) {
        return res.status(500).json({ error: "Erro ao excluir paciente." });
    }
}