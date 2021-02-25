const express = require('express');
const hbs = require('hbs');
const { dirname } = require('path');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', function (_, resp) {
    resp.render('index.hbs');
});

app.listen(3000);