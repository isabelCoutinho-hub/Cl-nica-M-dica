import conexao from '../database/conexao.js';

export async function cadastrar(consulta) {
    const sql = "insert into consultas (data_hora, motivo, situacao, id_paciente, id_medico) values (?, ?, ?, ?, ?)";
    const [resultado] = await conexao.execute(sql, 
        [consulta.data_hora, consulta.motivo, consulta.situacao, consulta.id_paciente, consulta.id_medico]);
    return resultado.insertId;
}

export async function listar() {
    const sql = "select * from consultas order by id_consulta";
    const [linhas] = await conexao.execute(sql);
    return linhas;
}

export async function buscarPorId(id) {
    const sql = "select * from consultas where id_consulta = ?";
    const [linhas] = await conexao.execute(sql, [id]);
    return linhas[0];
}

export async function atualizar(id, consulta) {
    const sql = "update consultas set data_hora = ?, motivo = ?, situacao = ?, id_paciente = ?, id_medico = ? where id_consulta = ?";
    const [resultado] = await conexao.execute(sql, 
        [consulta.data_hora, consulta.motivo, consulta.situacao, consulta.id_paciente, consulta.id_medico, id]);
    return resultado.affectedRows;
}

export async function excluir(id) {
    const sql = "delete from consultas where id_consulta = ?";
    const [resultado] = await conexao. execute(sql, [id]);
    return resultado.affectedRows;
}