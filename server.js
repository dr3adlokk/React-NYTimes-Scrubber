var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var logger = require ('morgan')


//express init 
var app = express()


//debug and json parsing 
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Serve Static content
app.use(express.static(process.cwd()+ '/public'));

//datase config local and remote
if(process.env.NODE_ENV == 'production'){

}
else {
    mongoose.connect('mongodb://localhost/scrubba')
}

var db = mongoose.connection;

//mongoose connection errors 
db.once('error', function(err){
    console.log('Mongoose Error: ', err);
});

//mongoose connection success 
db.once('open', function() {
    console.log('Mongoose Connection successful at ');
})

//importing the model for the articles 
var Article = require('./models/Article.js');

// the controller for the routes 
var router = require('./controllers/controller.js');
app.use('/', router);

var port = process.env.PORT || 3000
app.listen(port, function (){
    console.log('App Served to local host at port ' + port);
});