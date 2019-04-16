var express = require('express');
var mongoose= require('mongoose');
const bodyParser= require('body-parser');
var app= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));


//database
mongoose.connect("mongodb://localhost/rate_my_cakes");
require('./server/config/mongoose.js');

//routes
require('./server/config/routes.js')(app);

//port
app.listen(8000, function() {
    console.log("listening on port 8000");
})




 