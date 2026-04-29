const pool = require("../config/db");

const listarSolicitacoes = async () => {

    return await pool.query(
                `
                SELECT 
                    solicitacao.item,
                    solicitacao.descricao,
                    solicitacao.status,
                    solicitacao.quantidade,
                    instituicao.nome AS instituicao_nome,
                    instituicao.telefone AS instituicao_telefone,
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


const listarSolicitacoesDaInstituicao = async (instituicao_id) => {
  return await pool.query(
    `
    SELECT *
    FROM solicitacao
    WHERE instituicao_id = $1
    `,
    [instituicao_id]
  );
};


const deletarSolicitacao = async (id) => {
  return await pool.query(
    `
    DELETE *
    FROM solicitacao
    WHERE id = $1
    `,
    [id]
  );
};

module.exports = {
    listarSolicitacoes,
    criarSolicitacao,
    listarSolicitacoesDaInstituicao,
    deletarSolicitacao
}