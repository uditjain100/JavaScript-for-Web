// Async function automatically returns promises

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
var cont = document.querySelector(".container");
// var cont = document.querySelector("#pakemonList");

async function pokemon(i) {
  setTimeout(() => {
    console.log("" + api + i + ".png");
  }, 1000);
  newPokemon(i);
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

async function work() {
  for (var i = 1; i < 873; i++) {
    pokemon(i).then(() => {
      console.log("Showingggggggggg...");
    });
  }
}

work();
