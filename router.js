var mongoose = require('../db/mongose.js');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var User = require('../models/Registeration.js');
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var routes = router.post('/', (req,res,nxt) => {
  var userData = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
  };

  User.create(userData, (err) => {
  if(err)
  {
      console.log('got server error', err);
  }
  });
});


app.use('/Registration', routes);


app.listen(5000, () => {
    console.log('connected port 5000');
});
