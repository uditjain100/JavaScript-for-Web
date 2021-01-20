// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
var cont = document.querySelector(".container");

for (var i = 1; i < 899; i++) {
  var pokemon = document.createElement("div");
  var label = document.createElement("span");
  label.innerText = "#" + i;
  var newi = document.createElement("img");
  newi.src = "" + api + i + ".png";
  cont.appendChild(pokemon);
  pokemon.appendChild(newi);
  pokemon.appendChild(label);
}
