
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

var inderxRouter = require('./routes/index');
var usersRouter = require('./routes/users')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));

/*
app.get('/', function(request, response){
  response.send("Hello world")
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/views/index'));
});
*/

app.get('/', function(request, response){
  response.render('index');
});

app.get('/spaceForm', function(req, res){
  res.sendFile(path.join(__dirname + '/landlordSignUp.html'));
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;