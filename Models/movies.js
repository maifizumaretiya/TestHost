var mongoose = require('mongoose');

var movieSch = mongoose.Schema({
    name:String,
    rating:String
})
module.exports = mongoose.model("movies",movieSch);