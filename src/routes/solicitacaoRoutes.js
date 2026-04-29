const express = require("express");
const router = express.Router();

const controller = require("../controllers/solicitacaoController");
const autenticarToken = require("../middlewares/autenticarToken");

router.get("/solicitacoes", controller.listarSolicitacoes);
router.post("/solicitacoes", autenticarToken, controller.criarSolicitacao);
router.get("/minhas-solicitacoes", autenticarToken, controller.listarMinhasSolicitacoes);

module.exports = router;

