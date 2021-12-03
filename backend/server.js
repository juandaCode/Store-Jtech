"use strict";
const express = require('express');
const app = express();
const port = 3005;
const routerApi = require('./src/routes/index');

app.use(express.json());

const server = app.listen(port, () => {
  let host = server.address().address;
  console.log(`Server is running on ${host} ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World Express');
});

routerApi(app);







