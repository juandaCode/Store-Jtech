"use strict";
const express = require('express');
const router = express.Router();

const productsService = require('../services/product.service');

const service = new productsService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});


router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    "message": "Product created",
    "data": newProduct
});
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json({
    "message": "Product updated",
    "data": product
});
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const productDelete = await service.delete(id);
  res.json(productDelete);
});

// Los EndPoints que hayan de forma especifica deben ir antes que los dinamicos
router.get("/filter", async (req, res) => {
    await res.send("Productos filtrados");
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});


module.exports = router;
