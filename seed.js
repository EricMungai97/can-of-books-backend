'use strict';

const { Console } = require('console');
const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {

  await Book.create({
    title: 'The YUSA Guide to Balance MIND/BODY/SPIRIT',
    description: 'YUSA promote the highest form of abundance with our primary role on the planet being to provide the keys in order for one to unlock the shackles of self-limitation. We over-stand that it is every human beings sole birth right on the planet to be granted access to the highest truth and upmost understanding of self to enable personal growth beyond the limitations and expectations of modern society.',
    status: true,
  
  });

  await Book.create({
    title: 'ROOTS',
    description: 'The Saga of an American Family is a 1976 novel written by Alex Haley. It tells the story of Kunta Kinte, an 18th-century African, captured as an adolescent, sold into slavery in Africa, and transported to North America; it follows his life and the lives of his descendants in the United States down to Haley.',
    status: true,
  
  });

  await Book.create({
    title: 'Rich Dad Poor Dad',
    description: 'Roberts story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing',
    status: true,
  
  });

  console.log('Yusa was created');
  mongoose.disconnect();

}

  seed();

