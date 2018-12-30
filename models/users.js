const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  age: {
    type: Number,
    required: [true, 'Age Is Required']
  },
  password: String,
  role: Number,
  porfileImg: String,
  email: {
    type: String,
    required: [true, 'Email Is Required'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'name Is Required'],
  },

});

module.exports = mongoose.model('User', userSchema);