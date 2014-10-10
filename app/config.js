//var Bookshelf = require('bookshelf');
var mongoose = require('mongoose');
mongoURI = 'mongodb://localhost/shortlydb'
mongoose.connect(mongoURI);


var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
  console.log('connect')
});


module.exports = db;

