//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: The input will be a lowercase string with no spaces
//R: capitalize the letters that occupy even indexes and odd indexes separately, and return with every other letter uppercase and then lowercase, then with every other letter lowercase then uppercase
//E: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
//E: Index 0 will be considered even.
//P: Psuedo code -> see comments in solution
    //create a function that takes in a string
    //create an empty array to push results into
    //split the string into an array so you can loop through each element with map to 
    //use index % 2 === 0 to get even and odd indexes
    //use conditional statement (ternary operator) to convert even indexes to uppercase and odds to lowercase, then vice versa
    //return the new array (result)

//1st Iteration
//create a function that takes in a string
function alternateCapitalization(str){
    let result = [];//create an empty array to push results into

    //split the string into an array so you can loop through each element with map to 
    //use index % 2 === 0 to get even and odd indexes
    //use conditional statement (ternary operator) to convert even indexes to uppercase and odds to lowercase, then vice versa
    str.split('').map((char, index) => index % 2 === 0 || index === 0 ? result.push(char.toUpperCase()) : result.push(char.toLowerCase()))

    return result;
}
//Not there yet, returned: ['A', 'b', 'C', 'd', 'E', 'f']








//TOP SOLUTIONS FROM CODEWARS USERS:


















