// Async function automatically returns promises

var api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

async function pokemon(i) {
  setTimeout(() => {
    document.querySelector("img").src = "" + api + i + ".png";
  }, 100);
  console.log(i);
}

async function work() {
  for (var i = 1; i < 873; i++) {
    pokemon(i).then(() => {
      console.log("Showingggggggggg...");
    });
  }
}

work();
