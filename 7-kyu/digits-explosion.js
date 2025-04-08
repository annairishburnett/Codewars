//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input is a string made of digits [0-9], no letters, symbols, special characters, empty strings, or funny business? no
//R: return a string where each digit is repeated a number of times equals to its value
//E: "312" should return "333122"
// "102269" should return "12222666666999999999"
//E: none given
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - use .split('') to turn the string into an array (nums will still be strings)
// 3 - use .map(num => num.repeat(num) -> not sure if that works because they are still strings, JS might auto convert them, or might have to convert the string into a number: num.repeat(Number(num)), try without first
        //JS auto converted the string into a number
// 4 - use .join('') to convert array back into a string
// 5 - return the value and call the function


//1ST ITERATION
let string = "312";

function explode(s){
    return s.split('').map(num => num.repeat(num)).join('');
}

console.log(explode(string));
//First try!!! Worked on VSCode, now to try with Codewars.
//Worked!




//TOP SOLUTIONS FROM CODEWARS USERS:

















