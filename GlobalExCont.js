// We could generalize our function so that we pass in our
// specific instruction only when we run the
// copyArrayAndManipulate function!

function copyArrayAndManipulate(array, instructions) {
var output = [];
for (var i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}

function multiplyBy2(input) {
return input * 2;
}

var result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);



// Callback vs. Higher-order function

function copyArrayAndManipulate(array, instructions) {
var output = [];
for (var i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}

function multiplyBy2(input) {
return input * 2;
}
var result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// Which is our callback function?

// Which is our higher order function?

// Callback vs. Higher-order function

function copyArrayAndManipulate(array, instructions) {
var output = [];
for (var i = 0; i < array.length; i++) {
output.push(instructions(array[i]));
}
return output;
}

function multiplyBy2(input) {
return input * 2;
}
var result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// The function we pass in is a callback function
// The outer function that takes in the function (our callback) is a higher-order function