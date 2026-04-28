const pool = require("../config/db");

const listarInstituicoes = async () => {

    return await pool.query(
                `
                SELECT 
                    instituicao.nome,
                    instituicao.email
                FROM instituicao;
                `);
}

const criarInstituicao = async (nome, email, endereco, total_abrigados, senhaHash) => {
    return await pool.query(
                `
                    INSERT INTO instituicao (nome, email, endereco, total_abrigados, senha)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *
                `,
            [nome, email, endereco, total_abrigados, senhaHash]
            );
};

const buscarPorEmail = async (email) => {
    return await pool.query(
        `
        SELECT id, nome, email, senha
        FROM instituicao
        WHERE email = $1
        `,
        [email]
    );
};

module.exports = {
    listarInstituicoes,
    criarInstituicao,
    buscarPorEmail
}