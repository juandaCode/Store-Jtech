"use strict";
require('./src/models/database.model');
const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3005;
const routerApi = require('./src/routes/index.route');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
//app.use(urlencoded({ extended: false }));

const server = app.listen(port, () => {
  let host = server.address().address;
  console.log(`Server is running on ${host} ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World Express');
});

routerApi(app);







