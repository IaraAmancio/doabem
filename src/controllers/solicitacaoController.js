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

const criarSolicitacao = async (req, res) => {
    try{
            const instituicao_id = req.instituicao.id;
            const { quantidade, item, descricao } = req.body;

        
            const resultado = await solicitacaoModel.criarSolicitacao(instituicao_id, quantidade, item, descricao)
        
            res.status(201).json({
                mensagem: "Solicitação postada com sucesso",
            });
        }catch(erro){
            res.status(500).json({
                mensagem: "Erro ao postar Solicitação"
            })
        }
}

const listarMinhasSolicitacoes = async (req, res) => {
    try {
        const instituicao_id = req.instituicao.id;

        const resultado = await solicitacaoModel.listarSolicitacoesDaInstituicao(instituicao_id);

        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({
            erro: erro.message
        });
    }
};

const deletarSolicitacao = async (req, res) => {
    try {
        const solicitacao_id = req.params.id;
        const instituicao_id = req.instituicao.id;

        const resultado = await solicitacaoModel.deletarSolicitacao(
            solicitacao_id,
            instituicao_id
        );

        if (resultado.rowCount === 0) {
            return res.status(404).json({
                mensagem: "Solicitação não encontrada ou não pertence à instituição"
            });
        }

        res.json({
            mensagem: "Solicitação deletada com sucesso"
        });

    } catch (erro) {
        res.status(500).json({
            erro: erro.message
        });
    }
};

module.exports = {
    listarSolicitacoes,
    criarSolicitacao,
    listarMinhasSolicitacoes,
    deletarSolicitacao
}