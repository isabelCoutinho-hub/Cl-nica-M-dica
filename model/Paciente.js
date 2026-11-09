export class Paciente {
    #cpf

    constructor(id, nome, dataNascimento, cpf) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.#cpf = cpf;
    }
}