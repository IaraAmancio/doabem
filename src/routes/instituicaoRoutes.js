const express = require("express");
const router = express.Router();
const controller = require("../controllers/instituicaoController");

router.post("/instituicao", controller.criarInstituicao);
router.get("/instituicao", controller.listarInstituicoes);

module.exports = router;

