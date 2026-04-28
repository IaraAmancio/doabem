const pool = require("../config/db");

const listarSolicitacoes = async () => {

    return await pool.query(
                `
                SELECT 
                    categoria_item.nome,
                    categoria_item.descricao,
                    solicitacao.quantidade,
                    instituicao.nome,
                    instituicao.endereco,
                    instituicao.total_abrigados
                FROM solicitacao
                JOIN categoria_item
                ON solicitacao.categoria_item_id = categoria_item.id
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