const bcrypt = require("bcrypt");
const solicitacaoModel = require("../models/solicitacaoModel");

const listarSolicitacoes = async (req, res) => {
    try{
        const resultado = await solicitacaoModel.listarSolicitacoes();
        res.json(resultado.rows)
    } catch(erro){
        console.log(erro)
        res.status(500).json({erro: erro.message})
    }
}


module.exports = {
    listarSolicitacoes
}