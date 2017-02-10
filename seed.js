// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// description of structure
var GameSchema = new Schema({
  genre: String,
  title: String,
  isCool: Boolean
});

// turn it into a cookie model (which we can CRUD)
var Game = mongoose.model('Game', GameSchema);

// NAME AND CONNECT TO DATABASE
mongoose.connect('mongodb://localhost/express-personal-api')

var game = [
  {genre: "Real Time Strategy", title: "Command And Conquer", isCool: true},
  {genre: "Side-Scroller", title: "This War of Mine", isCool: true},
  {genre: "First Person Shooter", title: "Harry Poter", isCool: false},

];


// //// remove all the cookies
// Cookie.remove({}, function(err){
//   if(err){ console.log(err); }
//   // console.log("removed all the cookies")

  // create the cookies
  Game.create(game, function(err, game){
    if(err){ console.log(err); }
    console.log("seeded the db with", game.length, "games");
    console.log(game);
    process.exit();
  });
