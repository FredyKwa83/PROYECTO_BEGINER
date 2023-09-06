const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');


router.get('/login', userController.login); 

router.get('/perfil', userController.perfil); 

router.get('/registro', userController.registro); 






module.exports = router;