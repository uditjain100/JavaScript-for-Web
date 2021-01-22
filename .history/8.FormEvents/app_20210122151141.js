var list = document.querySelector("#tweets");
var tweet_btn = document.querySelector("#tweet_btn");
var username_input = document.querySelector("#username");
var tweet_input = document.querySelector("#tweet");
var allrows = document.querySelectorAll("#tweet_list");
var all_del_btns = document.querySelectorAll("#del_btn");

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
    newItem.id = "tweet_list";
    newItem.className = "row";
    newItem.style.margin = "3px";
    newItem.style.padding = "3px";
    generateColor(newItem);

    var newTweet = document.createElement("h3");
    newTweet.style.textAlign = "center";
    newTweet.style.color = "white";
    newTweet.className = "col-11";
    newTweet.innerText = username_input.value + "  :  " + tweet_input.value;

    var newbtn = document.createElement("button");
    newbtn.className = "col-1";
    newbtn.innerText = "X";
    newbtn.id = "del_btn";
    newbtn.style.borderRadius = "50%";
    newbtn.style.fontSize = "15px";
    newbtn.style.margin = "0px auto";
    newbtn.style.backgroundColor = "#003049";
    newbtn.style.color = "white";

    newItem.appendChild(newTweet);
    newItem.appendChild(newbtn);

    list.append(newItem);
    username_input.value = "";
    tweet_input.value = "";
    console.log(allrows);
  }
});

for (var row of allrows) {
  //   var db = row.querySelector("#del_btn");
  row.addEventListener("click", (e) => {
    console.log(e);
    // e.target == "DIV" && row.remove();
  });
}

// for (var i = 0; i < allrows.length; i++) {
//   all_del_btns[i].addEventListener("click", () => {
//     allrows[i].remove();
//   });
// }
