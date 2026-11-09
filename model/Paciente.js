export class Paciente {
    #cpf

    constructor(id, nome, dataNascimento, cpf) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.#cpf = cpf;
    }

    get getCpf() {
        return this.#cpf;
    }

    validar() {
        if (!this.nome || typeof this.nome !== 'string' || this.nome.trim().length < 3) {
            throw new Error("Nome inválido, deve conter no mínimo 3 caracteres.");
        }

        const cpfLimpo = this.#cpf ? String(this.#cpf).replace(/\D/g, '') : '';
        if (cpfLimpo.length !== 11) {
            throw new Error("CPF inválido, deve conter exatamente 11 caracteres numéricos.");
        }

        if (!this.dataNascimento) {
            throw new Error("A data de nascimento é obrigatória.");
        }
        const data = new Date(this.dataNascimento);
        if (isNaN(data.getTime())) {
            throw new Error("A data de nascimento informada é inválida.");
        }
    }

    static validarId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error("ID inválido para paciente, deve ser um número inteiro positivo.");
        }
    }
}