
var mongoose = require("mongoose");
var game = require('./game');

mongoose.connect("mongodb://localhost/express-personal-api");

module.exports.Game = require("./game");
