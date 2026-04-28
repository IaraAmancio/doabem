const express = require("express");
const router = express.Router();
const controller = require("../controllers/solicitacaoController");

router.post("/solicitacao", controller.criarSolicitacao);

module.exports = router;

