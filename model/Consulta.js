export class Consulta {

    constructor (data_hora, motivo, situacao, id_paciente, id_medico) {
        this.data_hora = data_hora;
        this.motivo = motivo;
        this.situacao = situacao;
        this.id_paciente = id_paciente;
        this.id_medico = id_medico;
    }

  validar() {
        if (!this.data_hora || !this.motivo || !this.situacao) {
            throw new Error("Todos os campos de texto/data são obrigatórios.");
        }

        if (typeof this.motivo !== 'string' || this.motivo.trim().length < 5) {
            throw new Error("Motivo inválido, deve conter no mínimo 5 caracteres.");
        }

        const statusValidos = ['rascunho', 'agendada', 'concluida', 'cancelada'];
        if (!statusValidos.includes(this.situacao.trim().toLowerCase())) {
            throw new Error("Situação inválida. Deve ser rascunho, agendada, concluida ou cancelada.");
        }
    }

  static validarId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("ID inválido para consulta, deve ser um número inteiro positivo.");
        }
    }
}