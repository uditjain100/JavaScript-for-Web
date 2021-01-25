var jokes = require("give-me-a-joke");
var color = require("colors");

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
