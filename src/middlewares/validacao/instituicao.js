
const Joi = require("joi");

const instituicaoSchema = Joi.object({
    nome: Joi.string().min(2).required().messages({
        "string.empty": "Nome da Instiuicao é obrigatório",
        "string.min": "Monome Instituição deve ter no minímo 2 caracteres",
        "any.require": "Nome da Instituição é obrigatório"
    }),
    email: Joi.string().email().required().messages({
       "string.empty": "E-mail é obrigatório",
        "string.email": "E-mail deve ser um e-mail válido",
        "any.require": "E-mail é obrigatório" 
    }),
    endereco: Joi.string().min(5).required().messages({
    "string.empty": "Endereço é obrigatório",
    "string.min": "Endereço deve ter no mínimo 5 caracteres",
    "any.required": "Endereço é obrigatório"
    }),
    senha: Joi.string().min(6).required().messages({
        "string.base": "Senha deve ser string",
        "string.empty": "Senha é obrigatória",
        "string.min": "Senha deve ter no minímo 6 caracteres",
        "any.require": "Senha é obrigatória"
    }),
    telefone: Joi.string().pattern(/^[0-9]{10,11}$/).required().messages({
      'string.pattern.base': 'Telefone inválido. Use apenas números, incluindo o DDD.',
      'any.required': 'Telefone é obrigatório'
    }),
});

function validarInstituicao(req, res, next){
    const {error} = instituicaoSchema.validate(req.body, {abortEarly:false});
    if(error){
        console.log(error);
        return res.status(400).json({
            erro: error.details.map(e => e.message)
        })
    };

    next();

}

module.exports = validarInstituicao;

