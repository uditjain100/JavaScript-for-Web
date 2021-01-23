// Async function automatically returns promises

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
var cont = document.querySelector(".container");

async function pokemon(i) {
  setTimeout(() => {
    return newPokemon(i);
  }, 2000);
}

async function work() {
  //   for (var i = 1; i < 873; i++) {
  //     await pokemon(i).then(() => {
  //       console.log("Showingggggggggg...");
  //     });
  //   }

  await pokemon(1);
  console.log("hi");
  await pokemon(1);
  console.log("hi");
  await pokemon(1);
  console.log("hi");
  await pokemon(1);
  console.log("hi");
  await pokemon(1);
  console.log("hi");
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

work();
