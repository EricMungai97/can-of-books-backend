'use strict';
const Book = require('../models/book.js');

async function postBooks(request, response, next){
  try{
    //request.body
    console.log(request.body);
    let createdBook = await Book.create({...request.body, email: request.user.email});
    response.status(200).send(createdBook);
  } catch (error){
    next(error);
  }
}

module.exports = postBooks;