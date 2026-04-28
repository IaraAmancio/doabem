const express = require("express");
const router = express.Router();
const controller = require("../controllers/ofertaController");


router.get("/feed", controller.listarOfertas);


module.exports = router;

