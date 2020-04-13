require("dotenv").config();

//connecting keys.js to liri.js
var keys = require("./keys.js")

//looking for npm
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require("moment");
var fs = require("fs");

//getting spotify keys
var spotify = new Spotify(keys.spotify);
var argument = process.argv[2];
var stringArgv = process.argv;
var userConcert = "";
var userSong = "";
var userMovie = "";

for (var i = 3; i < stringArgv.length; i++) {
  if (i > 3 && i < stringArgv.length) {
      userConcert = userConcert + " " + stringArgv[i];
      userSong = userSong + " " + stringArgv[i];
      userMovie = userMovie + "+" + stringArgv[i];
  } else {
      userConcert += stringArgv[i];
      userSong += stringArgv[i];
      userMovie += stringArgv[i];
  }
}