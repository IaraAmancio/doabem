const express = require("express");
const router = express.Router();

const controller = require("../controllers/solicitacaoController");
const autenticarToken = require("../middlewares/autenticarToken");

router.get("/solicitacoes", controller.listarSolicitacoes);
router.post("/solicitacoes", autenticarToken, controller.criarSolicitacao);

module.exports = router;

