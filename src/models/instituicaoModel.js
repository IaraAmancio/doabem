const pool = require("../config/db");

const listarInstituicoes = async () => {

    return await pool.query(
                `
                SELECT 
                    instituicao.nome,
                    instituicao.email,
                    instituicao.telefone
                FROM instituicao;
                `);
}

const criarInstituicao = async (nome, email, endereco, senhaHash, telefone) => {
    return await pool.query(
                `
                    INSERT INTO instituicao (nome, email, endereco, senha, telefone)
                    VALUES ($1, $2, $3, $4, $5)
                    RETURNING *
                `,
            [nome, email, endereco, senhaHash, telefone]
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