var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/searchlist';
var mongo = require('mongodb').MongoClient;

var imageSearch = require('node-google-image-search');




//Add entry to mongo database
var recordSearch = function(term) {
    mongo.connect(mongoURL, function(err, db) {
        if (err) throw err;
        var collection = db.collection('searchlist');
        collection.insert(
            {search: term, date: new Date()}
        );
        db.close();
    });    
}



// search for an image
// /searchteam?offset=x
app.get('/:term', function(req,res) {
    var searchTerm = req.params.term;
    var offset = 0;
    offset = req.query.offset;

    recordSearch(searchTerm);
    
    if(offset) {
        offset = parseInt(offset);
    } else {
        offset = 0;
    }

    imageSearch(searchTerm, function(results) {
        res.json(results.map( function(e) {
            return {'url': e.link,
                    'alt-text': e.snippet,
                    'thumbnail': e.image.thumbnailLink,
                    'context': e.image.contextLink
                   };
        }));
    }, offset, offset + 10)
    
});



// latest image search
app.get('/latest/imagesearch', function(req, res) {
    mongo.connect(mongoURL, function(err, db) {
        if (err) throw err;
        var collection = db.collection('searchlist');
        collection.find({}, {_id: 0})
            .sort({ date: -1 })
            .limit(10)
            .toArray( function(err, data) {
                if (err) throw err;
                res.json(data);
        });
        //db.close();
    });
});



app.listen(port)

