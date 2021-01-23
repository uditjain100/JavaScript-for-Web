// firstApproach();
secondApproach();

// First Approach
function firstApproach() {
  setTimeout(() => {
    document.body.style.backgroundColor = "red";
  }, 1000);
  setTimeout(() => {
    document.body.style.backgroundColor = "green";
  }, 2000);
  setTimeout(() => {
    document.body.style.backgroundColor = "blue";
  }, 3000);
  setTimeout(() => {
    document.body.style.backgroundColor = "yellow";
  }, 4000);
}

// Second Approach
function secondApproach() {
  setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "yellow";
      setTimeout(() => {
        document.body.style.backgroundColor = "green";
      }, 1000);
    }, 1000);
  }, 1000);
}

function thirdApproach() {}
