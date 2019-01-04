const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/category');
const Admin = require('../middleware/Admin');


//this router used to get all
router.get('/', (req, res) => {
  Category.find()
    .then(result => {
      res.send(result);
    }).catch(err => {
      res.status(400).send(err)
    })
})



// this router used to add category by admin 
router.post('/add', Admin, (req, res) => {
  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  category.save().then(result => {
    res.send(result);
  }).catch(err => {
    res.send(err);
  })
});


module.exports = router;