var express = require('express')
var router = express.Router();

//article model
var Article = require('../models/Article.js')


//index get request
router.get('/', function(req, res, next){
    res.sendFile(process.cwd()+ '/public/index.html');
});

//API get request
router.get('/api/saved', function (req, res, next){
    Article.find({}, function (err, docs){ 
        if (err){
            console.log(err)
            
        }

        else {
            res.json(docs);
        }
    });
});

//API POST for the components to save the article to the db
router.post('/api/saved', function (req, res, next){
    var entry = new Article (req.body);

entry.save(function (err, doc){
    if (err){
        console.log(err)
    
    }
    else {
        console.log(doc);
        res.sendStatus(200);

    }
});

});
//gotta CATCH em ALL  or CATCH ALL (pokemon referance...)
router.get('*', function(req, res ){
    res.redirect('/');
});

//Export routes to server.. That would kind of be nice

module.exports = router;