const express = require("express");
const router = express.Router();
const controller = require("../controllers/instituicaoController");
const validarInstituicao = require("../middlewares/validacao/instituicao");


router.post("/instituicao", validarInstituicao, controller.criarInstituicao);
router.get("/instituicao", controller.listarInstituicoes);

module.exports = router;

