"use strict";
console.log('Hello World Express');

const express = require('express');
const app = express();
const port = 3005;
const routerApi = require('./src/routes/index');

app.use(express.json());

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

app.get('/', (req, res) => {
    res.send('Hello World Express');
});

routerApi(app);







