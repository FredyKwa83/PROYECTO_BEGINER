const express = require('express');
const router = express.Router();

const productsController = require('../controller/productsController');

router.get('/', productsController.index); 

router.get('/detail/:id', productsController.detail); 

router.get ('/edit/:id', productsController.getEdit);
router.post ('/edit/:id', productsController.postEdit);

router.get('/products', productsController.products); 

router.get('/createProduct', productsController.getCreateProduct); 
router.put('/createProduct', productsController.putCreateProduct); 




module.exports = router;