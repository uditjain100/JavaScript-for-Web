// Async function automatically returns promises
work();

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
var cont = document.querySelector(".container");

async function pokemon(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      newPokemon(i);
      resolve();
    }, 2000);
  });
}

async function work() {
  for (var i = 1; i < 899; i++) {
    pokemon(i).then(() => {
      console.log("Showingggggggggg...");
    });
  }
}

function newPokemon(i) {
  var pokemon = document.createElement("div");
  var label = document.createElement("span");
  label.innerText = "#" + i;
  var newi = document.createElement("img");
  newi.src = "" + api + i + ".png";
  cont.appendChild(pokemon);
  pokemon.appendChild(newi);
  pokemon.appendChild(label);
}
