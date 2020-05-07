var express = require('express');
var app = express();

app.get('/home',function(req,res){
    res.send('You are in homeeeeee');
}).listen(5000);

console.log("Listening to Server...");