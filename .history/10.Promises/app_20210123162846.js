// firstApproach();
// secondApproach();
thirdApproach();
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

//Third Appreach
function thirdApproach() {
  function delayedColorChange(newColor, delay) {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
    }, delay);
  }
  delayedColorChange("red", 1000);
  delayedColorChange("yellow", 2000);
  delayedColorChange("green", 3000);
  delayedColorChange("purple", 4000);
  delayedColorChange("blue", 5000);
}

function fourthApproach() {
  function delayedColorChange(newColor, delay, doNext) {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      doNext();
    }, delay);
  }
  delayedColorChange('red',1000,() = >{
      delayedColorChange('yellow',1000,() => {
          delayedColorChange('purple',1000,() => {
              delayedColorChange('green' , 1000 , ()=> {
                  
              })
          })
      })
  })
}
