// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}




//MY SOLUTION:

const swapValues = arguments => arguments.reverse();





//OTHER CLEVER SOLUTIONS:

function swapValues() {
    return arguments[0].reverse();
}

function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

function swapValues() {
    var args = Array.prototype.slice.call(arguments)[0];
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}