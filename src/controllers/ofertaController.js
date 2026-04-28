const bcrypt = require("bcrypt");
const ofertaModel = require("../models/ofertaModel");

const listarOfertas = async (req, res) => {
    try{
        const resultado = await ofertaModel.listarOfertas();
        res.json(resultado.rows)
    } catch(erro){
        console.log(erro)
        res.status(500).json({erro: erro.message})
    }
}


module.exports = {
    listarOfertas
}