
var db = require('./models/game');
var mongoose = require('mongoose');


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
