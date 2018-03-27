// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

// Displays one call number.
function displayCallNumber(call_number) {

    // Every line should start with the call number, a space, and a dash,
    // and another space.
    let output = call_number = call_number + " - ";


    // Depending on what the call number prefix is, append the appropriate
    // classification to the end of the output.
    if (call_number.includes('PR')) {
        output = output + " English literature";
    } else if (call_number.includes('PS')) {
        output = output + " American literature";
    } else if (call_number.includes('PQ')) {
        output = output + " French literature";
    } else {
        output = output + " Other literature";
    }

    // Print out the output using the renderOutput() function
    renderOutput(output);
}


// Classify an array of call numbers.
function classifyCallNumbers(call_numbers) {

    // For each call number in the array, call the displayCallNumber() function.
    call_numbers.forEach(displayCallNumber);
}

// Call the classifyCallNumbers() function using the call_numbers array found in data.js
classifyCallNumbers(call_numbers);
