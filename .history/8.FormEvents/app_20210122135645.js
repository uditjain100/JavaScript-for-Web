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
    var newItem = document.createElement("div");
    newItem.className = "row";
    newItem.style.textAlign = "center";
    newItem.style.color = "white";
    generateColor(newItem);

    var newTweet = document.createElement("h3");
    newTweet.className = "col-10";
    newTweet.innerText = username_input.value + "  :  " + tweet_input.value;

    var newbtn = document.createElement("button");
    newbtn.className = "col-2";
    newbtn.innerText = "Delete";
    newbtn.id = "del_btn";
    newbtn.style.borderRadius = "20%";
    newbtn.style.fontSize = "400";

    newItem.appendChild(newTweet);
    newItem.appendChild(newbtn);

    list.append(newItem);
    username_input.value = "";
    tweet_input.value = "";
  }
});
