'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

//it is basically your template//

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true},
  status: { type: Boolean, required: true },

});

//gives the functionality to interact with your databas//

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;