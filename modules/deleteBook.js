'use strict';
const Book = require('../models/book.js');

async function deleteBooks(request, response, next){
  console.log(request.params);
  console.log(request.params.bookID)
  try{
    let id = request.params.bookID;
    await Book.findByIdAndDelete(id);
    response.status(200).send('Book was Deleted')
  } catch(error){
    next(error);
  }
}

module.exports = deleteBooks;