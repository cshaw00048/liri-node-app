require("dotenv").config();

//connecting keys.js to liri.js
var keys = require("./keys.js");

//looking for npm
var axios = require("axios");

//getting spotify keys
var spotify = new Spotify(keys.spotify);

//
if (selection === "concert-this"){
  myConcert();
}else if (selection === "spotify-this-song"){
  mySpotify();
}else if (selection === "movie-this"){
  omdb();
} else if (selection === "do-what-it-says") {
  doWhatItSays();
}

//Bands in town

var myConcert = function(){
    
}

