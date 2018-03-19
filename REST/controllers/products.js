'use strict'

const Product = require("../models/products");
const service = require("../service/restClient");

function getProducts(req, res){
    Product.find((err,products)=>{
        if(err) return res.status(500).send({message: 'Error al realizar peticion'});
        if(!products) return res.status(400).send({message: 'El producto no existe'});

        res.status(200).send({products});
    })
}

function getProduct(req, res){
    let productId = req.params.productId;
    Product.findById(productId,(err,product)=>{
        if(err) return res.status(500).send({message: 'Error al realizar peticion'});
        if(!product) return res.status(400).send({message: 'El producto no existe'});

        res.status(200).send({product});
    })
}





function postProducts(req,res){
    console.log('POST /api/product');
    console.log(req.body)

    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err,productStored)=>{
        if(err) res.status(500).send({
            message: `Error al ingresar el producto:${err}`
        });
        res.status(200).send({product:productStored});
    });
}

function getProductsExternos(req,res){
    service.getRequest("http://192.168.123.151:4000/computron/products/", function(response){
        res.send(response);
    })
}

module.exports = {
    getProduct,
    getProducts,
    postProducts,
    getProductsExternos
}

