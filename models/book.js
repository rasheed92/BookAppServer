const mongoose = require('mongoose');


const bookSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true
  },
  title: {
    type: String,
    required: [true, 'You have to set a title !']
  },
  pages: {
    type: Number,
    required: [true, 'You have to set a number of pages !']
  },
  author: {
    type: String,
    required: [true, 'You have to set a author !']
  },
  downloads: Number,
  description: String,
  PublishedAt: String,
  Language: String,
  uptime: String,
  file: {
    type: String,
    required: [true, 'You have to uploade a book file !']
  },
  bookImg: {
    type: String,
    required: [true, 'You have to uploade a book Img !']
  },
  fileSize: Number
});

module.exports = mongoose.model('Book', bookSchema);