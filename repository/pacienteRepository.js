import conexao from '../database/conexao.js';

export async function cadastrar(paciente) {
    const sql = "insert into pacientes (nome, data_nascimento, cpf) values (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, 
        [paciente.nome, paciente.data_nascimento, paciente.cpf]);
    return resultado.insertId;
}

export async function listar() {
    const sql = "select * from pacientes order by id_paciente";
    const [linhas] = await conexao.execute(sql);
    return linhas;
}

export async function buscarPorId(id) {
    const sql = "select * from pacientes where id_paciente = ?";
    const [linhas] = await conexao.execute(sql, [id]);
    return linhas[0];
}

export async function atualizar(id, paciente) {
    const sql = "update pacientes set nome = ?, data_nascimento = ?, cpf = ? where id_paciente = ?";
    const [resultado] = await conexao.execute(sql, 
        [paciente.nome, paciente.data_nascimento, paciente.cpf, id]);
    return resultado.affectedRows;
}

export async function excluir(id) {
    const sql = "delete from pacientes where id_paciente = ?";
    const [resultado] = await conexao. execute(sql, [id]);
    return resultado.affectedRows;
}