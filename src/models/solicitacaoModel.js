const pool = require("../config/db");

const listarSolicitacoes = async () => {

    return await pool.query(
                `
                SELECT 
                    solicitacao.item,
                    solicitacao.descricao,
                    solicitacao.quantidade,
                    instituicao.nome,
                    instituicao.endereco
                FROM solicitacao
                JOIN instituicao
                ON solicitacao.instituicao_id = instituicao.id;
                `);
}

const criarSolicitacao = async (instituicao_id, quantidade, item, descricao) => {
  return await pool.query(
    `
      INSERT INTO solicitacao (instituicao_id, quantidade, item, descricao)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `,
    [instituicao_id, quantidade, item, descricao]
  );
};


module.exports = {
    listarSolicitacoes,
    criarSolicitacao
}