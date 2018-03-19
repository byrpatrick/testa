
const express = require('express');
const productCtrl = require('../controllers/products');
const api = express.Router();
 

api.get('/products',productCtrl.getProducts);
api.get('/products/:productId',productCtrl.getProduct);
api.post('/products',productCtrl.postProducts);
api.get('/joseProducts',productCtrl.getProductsExternos);

module.exports = api;