var input = prompt("What would you like to do ?");
var todos = ["Gym", "Yoga"];
while (input !== "quit" && input !== "q") {
  if (input === "new") {
    input = prompt("What would you like to add !!");
    todos.push(input);
    console.log("" + input + " is added to list");
    console.log("Updated List is as followa --- ");
    console.log("************************");
    console.log(todos);
    console.log("************************");
    input = prompt("What would you like to do ?");
  } else if (input === "list") {
    console.log("************************");
    console.log("List is as followa --- ");
    console.log(todos);
    console.log("************************");
    input = prompt("What would you like to do ?");
  } else if (input === "delete") {
    input = prompt("What would you like to delete, Give its index !!");
    if (input > todos.length) console.log("Invalid Index");
    todos.splice(input, 1);
    console.log("" + input + " is deleted from list");
    console.log("Updated List is as followa --- ");
    console.log("************************");
    console.log(todos);
    console.log("************************");
    input = prompt("What would you like to do ?");
  } else {
    console.log("Wrong Command XXX");
    input = prompt("Please write the correct Command");
  }
}
console.log("OK!!, Quit Application is clicked");
