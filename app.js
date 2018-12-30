

// Dependencies
const express = require('express');
const app = express();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser')
const usersRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const CategoryRoutes = require('./routes/Category');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
var upload = require('express-fileupload');
var session = require('express-session');
var cors = require('cors')
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(upload());
app.use(cors({
  credentials: true,
}));

app.options("*", function (req, res, next) {
  //those headers used to Access-Control-Allow-Origin CORS 
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //other headers here
  res.status(200).end();
});


//  Starting MongoDB connection
mongoose.connect('mongodb://rasheed92:141516qw@ds227654.mlab.com:27654/rasheed', {
  useNewUrlParser: true
});

//  To Check if the connection works fine or not
mongoose.connection.on('connected', () => {
  console.log('\x1b[36m%s\x1b[0m', 'mongo has been connected...');
});



app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())


// MiddleWare
app.use(express.json());


// For serving images and other static data
app.use(express.static('public'));

app.use('/api/user', usersRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/category', CategoryRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log('Running on port ' + PORT);
});