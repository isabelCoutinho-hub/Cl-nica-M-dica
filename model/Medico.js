export class Medico {
    #crm

    constructor(id, nome, especialidade, crm) {
        this.id = id;
        this.nome = nome;
        this.especialidade = especialidade;
        this.#crm = crm;
    }

    get getCrm() {
        return this.#crm;
    }

     validar() {
        if (!this.nome || typeof this.nome !== 'string' || this.nome.trim().length < 3) {
            throw new Error("Nome inválido, deve conter no mínimo 3 caracteres.");
        }

        if (!this.especialidade || typeof this.especialidade !== 'string' || this.especialidade.trim().length < 3) {
            throw new Error("A especialidade deve conter no mínimo 3 caracteres.");
        }

        if (!this.#crm || String(this.#crm).trim().length === 0) {
            throw new Error("O CRM do médico é obrigatório.");
        }
    }

    static validarId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("ID inválido para médico, deve ser um número inteiro positivo.");
        }
    }
}