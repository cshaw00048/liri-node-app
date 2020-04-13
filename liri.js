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

switch(argument) {
  case "concert-this":
    concertThis();
    break;
  case "spotify-this-song":
    spotifyThisSong();
    break;
  case "movie-this":
    movieThis();
  case "do-what-it-says":
    dowhatitsays();
    break;
  case "hi":
    hiThere();
    break;
  case "help":
    hiThere();
    break;
  default: console.log(argument); break;
}

function hiThere(){
  console.log("Well Hello! Please access one of the following commands:");
  console.log("[Concert-This] - [Spotify-This-Song] - [Movie-This] - [Do-What-It-Says]");
}

function concertThis() {
  if(userConcert === "") {
    userConcert ="Post Malone";
  }
  var bands = "https://rest.bandsintown.com/artists/" + userConcert + "/events?appid=codingbootcamp";
  axios.get(bands).then(
    function(response, err) {
      if (response) {
        var bands = response.data[0];
        var venueName = "VenueName: " + bands.venue.name;
        var venueLocation = "Venue Location: " +bands.venue.city;
        var playTime = bands.datetime;
        var removeTime = playTime.split("T");
        var venueDate = "Venue Date: " + moment(removeTime[0]).format("MM/DD/YYYY");
        var venueRecord = venuName + "," + venueLocation + "," + venueDate;
        console.log (venueName);
        console.log(venueLocation);
        console.log(venueDate);
        fs.appendFile("log.txt", venueRecord, function(err){
          if(err){
            console.log(err);
          }else console.log("updated txt file");
        });
      }else {
        console.log(err);
      }
    });
}

function spotifyThisSong() {
  if (userSong === "") {
    userSong = "The Sign Ace of Base";
  }
  {spotify.search({
    type: "track",
    query: "'" + userSong + "'",
    limit: 20

  }, function (err, data) {
    var artist = "Artist(s): " + data.tracks.items[0].artists[0].name;
    var songName = "Song Title: " + data.tracks.items[0].name;
    var previewLink = "Preview Link :" + data.tracks.items[0].preview_url;
    var albumName = "Album Name :" + data.tracks.items[0].album.name;
    console.log(artist);
    console.log(songName);
    console.log(previewLink);
    console.log(albumName);
    if(err){
      console.log("Unable to comply: " + userSong + " : " + err);
    }

    
  }
  )}
}