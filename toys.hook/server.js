const express = require('express');
const hbs = require('hbs');
const { dirname } = require('path');
const app = express();
const fs = require('fs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.localsAsTemplateData(app);
app.use(express.static(__dirname + '/public'));

app.use('/', function (_, resp) {
    app.locals.styleFiles = fs.readdirSync('./public/css/').filter(x => x.endsWith('.css'));
    resp.render('index.hbs');
});

app.listen(3000);