const request = new XMLHttpRequest();

request.onload = function () {
  console.log("YEAHHHHHHH...");
  console.log(this);
};

request.onerror = () => {
  console.log("ERROR :: :(");
  console.log(this);
};
