const bcrypt = require("bcrypt");
const usuarioModel = require("../models/usuarioModel");

const criarUsuario = async (req, res) => {
    try{
        const {nome, email, senha} = req.body;

        const senhaHash = await bcrypt.hash(senha, 10)

        const resultado = await usuarioModel.criarUsuario(nome, email, senhaHash)
    
        res.status(201).json({
            mensagem: "Usuário criado com sucesso",
            usuario: resultado.rows[0]
        });
    }catch(erro){
        res.status(500).json({
            mensagem: "Erro ao cadastrar usuário"
        })
    }
}

const listarUsuarios = async (req, res) => {
    try{
        const resultado = await usuarioModel.listarUsuarios();
        res.json(resultado.rows)
    } catch(erro){
        console.log(erro)
        res.status(500).json({erro: erro.message})
    }
}


module.exports = {
    criarUsuario,
    listarUsuarios
}