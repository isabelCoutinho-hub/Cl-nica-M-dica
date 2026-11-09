export class Medico {
    #crm

    constructor(id, nome, especialidade, crm) {
        this.id = id;
        this.nome = nome;
        this.especialidade = especialidade;
        this.#crm = crm;
    }
}