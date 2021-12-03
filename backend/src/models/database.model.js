'use strict';
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/Jtech',
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    try {
      const db = await mongoose.connection;
      console.log('Connected to', db.name);
    } catch (error) {
      console.error('Error connecting to database', error);
    }
  }
);

module.exports = mongoose;

/* let db;
let collection;
mongoClient.connect('mongodb://localhost:27017/Jtech',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(error, client) => {
    if (error) return console.error(error);
    console.log('Connected to Database');
    db = client.db('Jtech');
    collection = db.collection('Users');
  }) */
