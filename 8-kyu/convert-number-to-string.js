//CODEWARS CODING CHALLENGE DESCRIPTION:

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function that takes in a number (integer)
//R: a string
//E: 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
//P: Psuedo code -> see comments in solution



function numberToString(num) {
    // I used the String() constructor function
    return String(num);
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function numberToString(num) {
    return num.toString();
}


function numberToString(num) {
    // Return a string of the number here!
    return String(num);
}

function numberToString(num) {
    return ''+num;
}

    function numberToString(num) {
        return num + '';
    }

const numberToString = num => `${num}`;

const numberToString = num => num.toString();

function numberToString(num) {
    // Return a string of the number here!
    return `${num}`;
}