"use strict";
const express = require('express');
const router = express.Router();

const productsService = require('../services/products.service');

const service = new productsService();

router.get("/", (req, res) => {
  const products = service.find();
  res.json(products);
});


router.post("/", (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    "message": "Product created",
    "data": newProduct
});
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    "message": "Product updated",
    "data": product
});
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const productDelete = service.delete(id);
  res.json(productDelete);
});

// Los EndPoints que hayan de forma especifica deben ir antes que los dinamicos
router.get("/filter", (req, res) => {
    res.send("Productos filtrados");
});

// Query Params

router.get('/parameters', (req, res) => {
  const { limit, offset } = req.query;

  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No se recibieron los parametros');
}
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});


module.exports = router;
