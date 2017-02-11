
var db = require('./models/game');
var mongoose = require('mongoose');
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


// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
//
// // description of structure
// var GameSchema = new Schema({
//   genre: String,
//   title: String,
//   isCool: Boolean
// });

// // turn it into a cookie model (which we can CRUD)
// var Game = mongoose.model('Game', GameSchema);

// NAME AND CONNECT TO DATABASE
 mongoose.connect('mongodb://localhost/express-personal-api')

var games = [
  {
    genre: "Real Time Strategy",
    title: "Command And Conquer",
    isCool: true
  },

  {
    genre: "Side-Scroller",
    title: "This War of Mine",
    isCool: true
},

  {
    genre: "First Person Shooter",
    title: "Harry Poter",
    isCool: false
  },

];


  // create the games
  db.create(games, function(err, pototo){
    if(err){ console.log(err); }
    console.log("Seeded the db with", games.length, "games");
    console.log(pototo);
    process.exit();
  });
