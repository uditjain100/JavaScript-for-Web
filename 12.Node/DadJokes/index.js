var jokes = require("give-me-a-joke");
var color = require("colors");
var cow = require("cowsay");

jokes.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
