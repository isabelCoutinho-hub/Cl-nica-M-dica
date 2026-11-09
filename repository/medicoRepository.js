import conexao from "../database/conexao.js";

export async function cadastrar(medico) {
    const sql = "insert into medicos (nome, especialidade, crm) values (?, ?, ?)";
    const [resultado] = await conexao.execute(sql, 
        [medico.nome, medico.especialidade, medico.getCrm]);
    return resultado.insertId;
}

export async function listar() {
    const sql = "select * from medicos order by id_medico";
    const [linhas] = await conexao.execute(sql);
    return linhas;
}

export async function buscarPorId(id) {
    const sql = "select * from medicos where id_medico = ?";
    const [linhas] = await conexao.execute(sql, [id]);
    return linhas[0];
}

export async function atualizar(id, medico) {
    const sql = "update medicos set nome = ?, especialidade = ?, crm = ? where id_medico = ?";
    const [resultado] = await conexao.execute (sql, 
        [medico.nome, medico.especialidade, medico.getCrm, id]);
    return resultado.affectedRows;
}

export async function excluir(id) {
    const sql = "delete from medicos where id_medico = ?";
    const [resultado] = await conexao. execute(sql, [id]);
    return resultado.affectedRows;
}