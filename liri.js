var Spotify = require("node-spotify-api");
var axios = require("axios");
var spotify = new Spotify({
    id: "9e1a1d4373af4b618b59e85f26118f87",
    secret: "d5e37f95db0045d8b0d8853c43bcf166"
  });
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



