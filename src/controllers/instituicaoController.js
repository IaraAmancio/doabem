const bcrypt = require("bcrypt");
const instituicaoModel = require("../models/instituicaoModel");

const criarInstituicao = async (req, res) => {
    try{
        console.log("BODY:", req.body);
        const {nome, email, endereco, total_abrigados, senha} = req.body;

        const senhaHash = await bcrypt.hash(senha, 10)

        const resultado = await instituicaoModel.criarInstituicao(nome, email, endereco, total_abrigados, senhaHash)
    
        res.status(201).json({
            mensagem: "Instituição cadastrada com sucesso",
            usuario: resultado.rows[0]
        });
    }catch(erro){
        console.log(erro);
        res.status(500).json({
            mensagem: "Erro ao cadastrar instituição"
        })
    }
}

const listarInstituicoes = async (req, res) => {
    try{
        const resultado = await instituicaoModel.listarInstituicoes();
        res.json(resultado.rows)
    } catch(erro){
        console.log(erro)
        res.status(500).json({erro: erro.message})
    }
}


module.exports = {
    criarInstituicao,
    listarInstituicoes
}