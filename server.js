var express = require('express');
var app = express();

//setting engine to view ejs
app.set('view engine', 'ejs');

//public folder to store assets
app.use(express.static(__dirname + '/public'))

//app routes
app.get('/', function(req,res) {
    res.render('pad')
})

//port listening in 3000
app.listen(3000);

module.exports = app;