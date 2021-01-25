const fig = require("figlet");
fig("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went Wrong !!! ", err);
    return;
  }
  console.log(data);
});
