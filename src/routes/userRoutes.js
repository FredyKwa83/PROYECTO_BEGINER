const express = require('express');
const router = express.Router();
const { check } = require('express-validator');


const userController = require('../controller/userController');

const validateLogin = [ 
    
check('usernameLogin') 
.notEmpty().withMessage('Debes completar el usuario').bail()
.isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

 check('passwordLogin')
 .notEmpty().withMessage('Debes completar el password').bail()
 .isLength({ min: 8 }).withMessage('El password debe tener al menos 8 carateres'),

]

const validateRegistro = [ 

    check('nombre') 
    .notEmpty().withMessage('Debes completar tu nombre'),
    
    check('Apellido') 
    .notEmpty().withMessage('Debes completar tu Apellido'),
    
    check('username') 
    .notEmpty().withMessage('Debes completar tu usuario').bail()
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

    check('email')
    .notEmpty().withMessage('debes completar el email').bail()
    .isEmail().withMessage('Debes completar un email válido'),
    
    check('fecha')
    .notEmpty().withMessage('Debes elegir una fecha'),
     
    check('pais')
    .notEmpty().withMessage('Debes elegir un pais'),

    check('genero')
    .notEmpty().withMessage('Debes elegir genero'),

    check('password')
    .notEmpty().withMessage('Debes completar el password').bail()
    .isLength({ min: 8 }).withMessage('El password debe tener al menos 8 carateres'),
    
    check('confirm-password')
    .notEmpty().withMessage('Debes confirmar el password').bail()
    .isLength({ min: 8 }).withMessage('El password debe tener al menos 8 carateres'),

    ]


router.get('/login', userController.login);
router.post('/login', validateLogin, userController.postLogin); 

router.get('/perfil', userController.perfil); 

router.get('/registro',  userController.registro); 
router.post('/registro', validateRegistro, userController.postRegistro); 






module.exports = router;