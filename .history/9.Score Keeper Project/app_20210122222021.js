var p1_score = document.querySelector("#score2");
var p2_score = document.querySelector("#score4");

var p1_btn = document.querySelector("#p1_btn");
var p2_btn = document.querySelector("#p2_btn");
var reset_btn = document.querySelector("#reset");

var i = 0;
var j = 0;
var max = 5;

p1_btn.addEventListener("click", () => {
  if (i + 1 === max) {
    scoreCard.innerText = "SCORES : " + ++i + "/" + j;
  } else {
    console.log("Heyyyyyyyyyyyy !!");
    p1_score.innerText = "SCORES : " + ++i + "/" + j;
  }
});
