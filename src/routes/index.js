"use strict";
const express = require("express");
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const aboutRouter = require('./about.router');
const categoriesRouter = require('./categories.router');
function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/about', aboutRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
