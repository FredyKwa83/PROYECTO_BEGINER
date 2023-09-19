
const { validationResult } = require('express-validator');

const userController = {

    login: (req, res) => {
        res.render('./user/login')
    },

    postLogin:(req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {

        } else {
            // Hay errores, volvemos al formulario con los mensajes
            res.render('./user/login', { errors: errors.mapped(), oldData: req.body });
            };
    },

    perfil: (req, res) => {
        res.render('./user/perfil');
    },
    
    registro: (req, res) => {
        res.render('./user/registro')
    },

    postRegistro:(req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {

        } else {
            // Hay errores, volvemos al formulario con los mensajes
            res.render('./user/registro', { errors: errors.mapped(), oldData: req.body });
            } 
            
		return res.send('Ok, las validaciones se pasaron y no tienes errores');    
    }
    
}

module.exports = userController;