import { Consulta } from "../model/Consulta.js";
import * as consultaRepository from "../repository/consultaRepository.js";

export async function cadastrarConsulta(req, res) {
    try {
        const { data_hora, motivo, situacao, id_paciente, id_medico} = req.body;

        if (!data_hora || !motivo || !situacao || !id_paciente || !id_medico) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }
    const consulta = new Consulta(data_hora, motivo, situacao, id_paciente, id_medico);
    const id = await cadastrar(consulta);
    
    res.status(201).json({ id_consulta: id, message: "Consulta cadastrada com sucesso." });
    
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar consulta." });
        }
    }
    
    export async function listarConsultas(req, res) {
        try {
            const consultas = await listar();
            return res.status(200).json(consultas);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao listar consultas." });
        }
    }
    
    export async function buscarConsultaId(req, res) {
        try {
            const consultas = await buscarPorId(req.params.id);
    
            if (!consultas) {
                return res.status(404).json({ error: "Consulta não encontrada." });
            }
            return res.status(200).json(consultas);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar consulta." });
        }
    }
    
    export async function atualizarConsulta(req, res) {
        try {
            const { data_hora, motivo, situacao, id_paciente, id_medico } = req.body;
    
            if (!data_hora || !motivo || !situacao || !id_paciente || !id_medico) {
                return res.status(400).json({ error: "Todos os campos são obrigatórios." });
            }
        const consulta = new Consulta(data_hora, motivo, situacao, id_paciente, id_medico);
        const linhasAlteradas = await atualizar(req.params.id, consulta);
    
        if (linhasAlteradas === 0) {
            return res.status(404).json({ error: "Consulta não encontrada." });
        }
        return res.status(200).json({ message: "Consulta atualizada com sucesso." });
        } catch (error) {
            return res.status(500).json({ error: "Erro ao atualizar consulta." });
        }
    }
    
    export async function excluirConsulta(req, res) {
        try {
            const linhasExcluidas = await excluir(req.params.id);
    
            if (linhasExcluidas === 0 ) {
                return res.status(404).json({ error: "Consulta não encontrada." });
            }
        } catch (error) {
            return res.status(500).json({ error: "Erro ao excluir consulta." });
        }
    }