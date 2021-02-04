const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use('/', function(_, resp){
resp.send('Главная');
});

app.listen(3000);