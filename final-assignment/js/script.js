"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("hours");
    output_element.innerHTML += "<h3>" + output + "</h3>"
}

let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];




function displaydailyHours(hours) {
  let parts=hours.split(": ");
  if (parts[1]==="closed") {
    renderOutput("On "+parts[0]+" the library is closed");
  } else {
    renderOutput("On "+parts[0]+" the hours are "+parts[1]);
  }
}

function dailyHours(hours) {
  console.log("dailyHours")
  hours.forEach(displaydailyHours);
}

dailyHours(hours);