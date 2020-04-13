require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);

  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });

  var omdb = "http://www.omdbapi.com/?apikey=a7aa0484"
  axios.get(omdb + "&t=batman") 
  .then(function(res) {
      console.log(res.data);
  })



