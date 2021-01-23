// Async function automatically returns promises
work();

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
var cont = document.querySelector(".container");

async function pokemon(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      newPokemon(i, changeColor());
      resolve();
    }, 100);
  });
}

async function work() {
  for (var i = 1; i < 899; i++) {
    await pokemon(i).then(() => {
      console.log(api + i + ".png");
    });
  }
}
var changeColor = function () {
  rand1 = Math.floor(Math.random() * 256);
  rand2 = Math.floor(Math.random() * 256);
  rand3 = Math.floor(Math.random() * 256);
  return "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
};

function newPokemon(i, color) {
  var pokemon = document.createElement("div");
  pokemon.style.backgroundColor = color;
  pokemon.style.margin = "1px";
  var label = document.createElement("span");
  label.innerText = "#" + i;
  var newi = document.createElement("img");
  newi.src = "" + api + i + ".png";
  cont.appendChild(pokemon);
  pokemon.appendChild(newi);
  pokemon.appendChild(label);
}
