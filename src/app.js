require("dotenv").config();
const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarioRoutes");
const instituicaoRoutes = require("./routes/instituicaoRoutes");
const SolicitacaoRoutes = require("./routes/solicitacaoRoutes");
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const feedRoutes = require("./routes/feedRoutes");

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    res.send("<h1>DoaBem</h1>")
})

app.use(usuarioRoutes);
app.use(instituicaoRoutes);
app.use(SolicitacaoRoutes);
app.use(testRoutes);
app.use(authRoutes);
app.use(feedRoutes);

module.exports = app;