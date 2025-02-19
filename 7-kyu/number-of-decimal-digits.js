//CODEWARS CODING CHALLENGE DESCRIPTION:


// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input will be an integer greater than or equal to zero, all inputs will be valid
//R: return the total number of digits in the integer
//E: 9 --> 1
//66 --> 2
//E: Be careful to avoid overflows/underflows. --> not sure how to do this?? we'll find out
//P: Psuedo code -> see comments in solution

//create a function that takes in a number
//we could convert it into a string and use .length, or an array and use .length
//to use an array we'd have to convert it into a str using .toString() then use .split('') to turn it into an array
//return the value, call the function, pass in an argument

//1st Iteration
function digits(n){
    return n.toString().split('').length;
}
//It works! But I don't know if it will handle overflows/underflows


//2nd Iteration
let num = 35;

function digitsInInteger(int){
    return int.length;
}

console.log(digitsInInteger(num));
//Got undefined???
//Because int is a number, not a string, you have to convert it to a string using .toString() before you can use the .length property


//3rd Iteration
function digitsInInteger(n){
    return n.toString().length;
}


//TOP SOLUTIONS FROM CODEWARS USERS:

function digits(n) {
    return n.toString().length;
}



function digits(n) {
    return String(n).length
}


function digits(n) {
    return `${n}`.length;
}


const digits = n => n.toString().length;
















