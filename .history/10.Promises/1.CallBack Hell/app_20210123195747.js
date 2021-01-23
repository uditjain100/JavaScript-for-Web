// firstApproach();
// secondApproach();
// thirdApproach();
// fourthApproach();
// promiseApproach();
asyncAndawaitApproach();

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

//Fourth Approach
function fourthApproach() {
  function delayedColorChange(newColor, delay, doNext) {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      doNext();
    }, delay);
  }
  delayedColorChange("red", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("purple", 1000, () => {
        delayedColorChange("green", 1000, () => {});
      });
    });
  });
}

function promiseApproach() {
  function delayedColorChange(newColor, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        resolve();
      }, delay);
    });
  }

  delayedColorChange("voilet", 1000)
    .then(() => delayedColorChange("blue", 1000))
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("yellow", 1000))
    .then(() => delayedColorChange("orange", 1000))
    .then(() => delayedColorChange("red", 1000));
}

function asyncAndawaitApproach() {
  function delayedColorChange(newColor, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        resolve();
      }, delay);
    });
  }

  await delayedColorChange("voilet", 1000);
  await delayedColorChange("blue", 1000));
  await delayedColorChange("green", 1000));
  await delayedColorChange("yellow", 1000));
  await delayedColorChange("orange", 1000));
  await delayedColorChange("red", 1000));
}
