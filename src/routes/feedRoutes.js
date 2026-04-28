const express = require("express");
const router = express.Router();
const controller = require("../controllers/solicitacaoController");


router.get("/feed", controller.listarSolicitacoes);


module.exports = router;

