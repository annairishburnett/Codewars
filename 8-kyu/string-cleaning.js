//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: a string that may or may not have numbers in it
//R: return the input string but without any of the numerical characters in it
//E: '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
//E: there can be strings with no numbers, other than that no funny business like an array or something else. 
//P: Psuedo code -> see comments in solution

//1 - create a function that takes in a string
//2 - use .replace() with empty quotations to remove characters
//3 - use regex /[1234567890]/ and the g global flag to select any character within that set
//4 - return the new string, call the function, pass in an argument, and console.log the result to check that it's working

//1st Iteration
let string = 'This looks5 grea8t!';

function stringClean(s){
    return s.replace(/[1234567890]/g, '');
}

console.log(stringCleaning(string));
//Success!





//TOP SOLUTIONS FROM CODEWARS USERS:


















