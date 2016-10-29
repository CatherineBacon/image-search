var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/searchlist';
var mongo = require('mongodb').MongoClient;


// search for an image
// /searchteam?offset=x
app.get('/:term', function(req,res) {
    var searchTerm = req.params.term;
    var offset = req.query.offset;
    res.json({
        'search': searchTerm,
        'offset': offset
    });
    // retrun json { 'url': page_address, 'alt-text': description, 'thumbnail': imagelink }
});




// latest image search
app.get('/latest/imagesearch', function(req, res) {
    // return json {'term': 'searchterm', 'when': 'dateofsearch'}
});




app.listen(port)

