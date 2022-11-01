'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./modules/books.js');


const app = express();
app.use(cors());

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

// ENDPOINT - TO GET ALL CATS FROM THE DATABASE - SEND IT TO OUR FRONT END

app.get('/books', getBooks);


app.get('*', (request, response) => {
  response.status(404).send('Not availabe');
});


// ERROR
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
