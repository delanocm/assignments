// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "Ben";
let your_name = "Milly";

if (my_name === "Ben") {
  renderOutput("That's me!");
} else if (my_name === "Milly") {
   renderOutput("Not me!");
} else {
  renderOutput("I must be someone else");
}
 
function helloWorld() {
  renderOutput("Hello World");
}

helloWorld();

function helloName(name) {
  renderOutput("Hello " + name);
}
helloName("Ben");
helloName("Loch");
helloName("Milly");

function todaysHours(hours) {
  renderOutput(hours);
}

// todasyHours("Tuesday: 9a -5p");

hours.forEach(todaysHours);
