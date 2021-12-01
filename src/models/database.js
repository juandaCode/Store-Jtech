const mongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

let db;
let collection;
mongoClient.connect('mongodb://localhost/jtech',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(error, client) => {
    if (error) return console.error(error);
    console.log('Connected to Database');
    db = client.db('Jtech');
    collection = db.collection('Users');
  })
