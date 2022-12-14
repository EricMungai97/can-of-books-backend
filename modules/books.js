'use strict';
const Book = require('../models/book.js');

async function getBooks(request, response, next){
  try {
    let results = await Book.find({ email: request.user.email});

    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

module.exports = getBooks;