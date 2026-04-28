const pool = require("../config/db");

const listarUsuarios = async () => {

    return await pool.query(
                `
                SELECT 
                    usuarios.nome,
                    usuarios.email
                FROM usuarios;
                `);
}

const criarUsuario = async (nome, email, senhaHash) => {
    return await pool.query(
                `
                    INSERT INTO usuarios (nome, email, senha)
                    VALUES ($1, $2, $3)
                    RETURNING *
                `,
            [nome, email, senhaHash]
            );
};

const buscarPorEmail = async (email) => {
    return await pool.query(
        `
        SELECT id, nome, email, senha
        FROM usuarios
        WHERE email = $1
        `,
        [email]
    );
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    buscarPorEmail
}