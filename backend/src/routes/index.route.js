"use strict";
const express = require("express");
//const db = require('../models/db');
//const user = require('../models/user');

const productsRouter = require('./product.route');
const usersRouter = require('./user.route');
const categoriesRouter = require('./category.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
