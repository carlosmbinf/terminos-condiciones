var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
app.use(cookieParser());
require('dotenv').config({path:'./variables.env'})

// Estructura del html
var header = require('./client/header.js');
var main = require('./client/main.js');
var footer = require('./client/footer.js');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

var fs = require('fs');
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/js', express.static(__dirname + '/client/js'));
// app.use('/font', express.static(__dirname + '/client/font'));

app.get('/', function (req, res) {

  if (req.query.ln == 'sp') {    
    
  // res.write(header('en',1));
  res.write(main(2));
  // res.write(footer('en',1));
  // res.sendFile(__dirname + '/client/index.html');
  res.end();

  }else{    
      
  // res.write(header('es',1));
  res.write(main(1));
  // res.write(footer('es',1));
  // res.sendFile(__dirname + '/client/index.html');
  res.end();

  }
  
  
});


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  })