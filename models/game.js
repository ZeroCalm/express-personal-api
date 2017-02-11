var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var GameSchema = new Schema({
    genre: String,
    title: String,
    isCool: Boolean
  });

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;
