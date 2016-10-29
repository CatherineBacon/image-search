var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/searchlist';
var mongo = require('mongodb').MongoClient;

var imageSearch = require('node-google-image-search');

// keys for search api



var listResults = function(results){
    console.log(results);
    return results;
}



// search for an image
// /searchteam?offset=x
app.get('/:term', function(req,res) {
    var searchTerm = req.params.term;
    var offset = 0;
    offset = req.query.offset;
    //res.json({
    //    'search': searchTerm,
    //    'offset': offset
    //});

    if(offset) {
        offset = parseInt(offset);
    } else {
        offset = 0;
    }

    var results = imageSearch(searchTerm, listResults, offset, offset + 10)
    console.log(results);

    // retrun json { 'url': page_address, 'alt-text': description, 'thumbnail': imagelink }
});




// latest image search
app.get('/latest/imagesearch', function(req, res) {
    // return json {'term': 'searchterm', 'when': 'dateofsearch'}
});




app.listen(port)

