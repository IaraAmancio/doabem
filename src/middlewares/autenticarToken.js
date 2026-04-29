const jwt = require("jsonwebtoken");

function autenticarToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            mensagem: "Token não enviado"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        req.instituicao = payload;

        next();
    } catch (erro) {
        return res.status(401).json({
            mensagem: "Token inválido"
        });
    }
}

module.exports = autenticarToken;