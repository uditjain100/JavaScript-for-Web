var p1_score = document.querySelector("#score2");
var p2_score = document.querySelector("#score4");

var p1_btn = document.querySelector("#p1_btn");
var p2_btn = document.querySelector("#p2_btn");
var reset_btn = document.querySelector("#reset");

var max_score_selector = document.querySelector("#max_score_select");
console.log(max_score_selector);

var i = 0;
var j = 0;
var max = 5;
var isGameOyer = false;

max_score_selector.addEventListener("change", () => {
  alert(this.value);
  max = parseInt(this.value);
  alert(this.value);
  reset();
});

p1_btn.addEventListener("click", () => {
  if (!isGameOyer) {
    if (i + 1 === max) {
      p1_score.innerText = ++i;
      p1_score.style.color = "Green";
      p2_score.style.color = "Red";
      i = 0;
      j = 0;
      isGameOyer = true;
      alert("Restart Game :)");
    } else {
      p1_score.style.color = "Black";
      p1_score.innerText = ++i;
    }
  }
});

p2_btn.addEventListener("click", () => {
  if (!isGameOyer) {
    if (j + 1 === max) {
      p2_score.innerText = ++j;
      p2_score.style.color = "Green";
      p1_score.style.color = "Red";
      i = 0;
      j = 0;
      isGameOyer = true;
      alert("Restart Game :)");
    } else {
      p2_score.style.color = "Black";
      p2_score.innerText = ++j;
    }
  }
});

reset_btn.addEventListener("click", reset);

function reset() {
  isGameOyer = false;
  i = 0;
  j = 0;
  p1_score.innerText = i;
  p2_score.innerText = j;
  p2_score.style.color = "Black";
  p1_score.style.color = "Black";
}
