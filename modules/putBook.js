'use strict';
const Book = require('../models/book.js');

async function updateBook(request, response, next) {
  try {
    // REQUEST.PARAMS & REQUEST.BODY
    let id = request.params.bookID;
    let data = request.body;

    // findByIdAndUpdate - 3 arguments
    // 1. id of the thing to update
    // 2. updated data
    // 3 option object - { new: true, overwrite: true }


    const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true, overwrite: true })
    response.status(200).send(updatedBook);

  } catch (error) {
    next(error)
  }
}

module.exports = updateBook;