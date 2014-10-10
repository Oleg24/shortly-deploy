var crypto = require('crypto');
var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({
  visits: Number,
  link: String,
  title: String,
  code: String,
  base_url: String,
  url: String
});


var Link = mongoose.model('Link', linkSchema);

var createSha = function(url){
  var shasum = crypto.createHash('sha1');
  // ask about what is happening here
  shasum.update(url);
  return shasum.digest('hex').slice(0,5);
};

linkSchema.pre('save', function(next){
  this.code = createSha(this.url);
  next();
});

module.exports = Link;
