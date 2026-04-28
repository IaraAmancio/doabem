const pool = require("../config/db");

const listarOfertas = async () => {

    return await pool.query(
                `
                SELECT 
                    categoria_item.nome,
                    categoria_item.descricao,
                    oferta.quantidade
                FROM oferta
                JOIN categoria_item
                ON oferta.categoria_item_id = categoria_item.id;
                `);
}

const criarOferta = async (nome, email, senhaHash) => {
    return await pool.query(
                `
                    INSERT INTO usuarios (nome, email, senha)
                    VALUES ($1, $2, $3)
                    RETURNING *
                `,
            [nome, email, senhaHash]
            );
};


module.exports = {
    listarOfertas,
    criarOferta
}