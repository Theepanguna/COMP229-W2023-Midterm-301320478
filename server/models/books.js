/*-- models/book.js
   Pratheepan Gunaratnam
   Student id :- 301320478
   5-03-23
   Favourite Book List

*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
