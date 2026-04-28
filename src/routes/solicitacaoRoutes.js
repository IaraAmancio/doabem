const express = require("express");
const router = express.Router();
const controller = require("../controllers/solicitacaoController");

router.get("/solicitacoes", controller.listarSolicitacoes);
router.post("/solicitacoes", controller.criarSolicitacao);

module.exports = router;

