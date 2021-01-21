var list = document.querySelector("#tweets");
var tweet_btn = document.querySelector("#tweet_btn");
var username_input = document.querySelector("#username");
var tweet_input = document.querySelector("#tweet");

function generateColor(item) {
  rand1 = Math.floor(Math.random() * 256);
  rand2 = Math.floor(Math.random() * 256);
  rand3 = Math.floor(Math.random() * 256);
  console.log("rgb(" + rand1 + "," + rand2 + "," + rand3 + ")");
  item.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
}

tweet_btn.addEventListener("click", () => {
  if (username_input.value === "" || tweet_input.value === "")
    alert("Input Field is Empty :(");
  else {
    var newItem = document.createElement("h3");
    newItem.innerText = username_input.value + "  :  " + tweet_input.value;
    newItem.style.textAlign = "center";
    newItem.style.color = "white";
    generateColor(newItem);
    list.append(newItem);
    username_input.value = "";
    tweet_input.value = "";
  }
});
