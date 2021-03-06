// First Approach
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

// Second Approach

setTimeout(() => {
  document.body.style.backgroundColor = "red";
  setTimeout(() => {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
      document.body.style.backgroundColor = "red";
    }, 1000);
  }, 1000);
}, 1000);
