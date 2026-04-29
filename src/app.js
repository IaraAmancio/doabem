require("dotenv").config();
const express = require("express");
const cors = require("cors");

const instituicaoRoutes = require("./routes/instituicaoRoutes");
const solicitacaoRoutes = require("./routes/solicitacaoRoutes");
const authRoutes = require("./routes/authRoutes");
const feedRoutes = require("./routes/feedRoutes");

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    res.send("<h1>DoaBem</h1>")
})

app.use(instituicaoRoutes);
app.use(solicitacaoRoutes);
app.use(authRoutes);
app.use(feedRoutes);

module.exports = app;