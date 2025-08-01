//CODEWARS CODING CHALLENGE DESCRIPTION:

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input will be a number, an integer or floated value
//R: return must be that number preceded by a dollar sign and a number with exactly two decimal places
//E: 3 needs to become $3.00
// 3.1 needs to become $3.10
//E: add trailing zeros if they are missing, but no need to worry about any dangling periods
//P: see steps below

//1 - create a function that takes in a number
//2 - convert to a string to to check if it includes a period using .toString and .includes
//3 - if it doesn't have a period, then we know it's just dollars and no cents, so we can add a period and 00 at the end using a template literal
//4 - if it does have a period, then we can check the length of the string to see if it's equal to three (3.3), if it is then we only add one zero using the template literal
//  - return the value, call the function, pass in an argument, and console.log the result








//TOP SOLUTIONS FROM CODEWARS USERS:



