//CODEWARS CODING CHALLENGE DESCRIPTION:

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input is a string of one or more words. Any special characters, numbers, empty strings, or other funny business? No: Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//R: Return the same string, but with all words that have five or more letters reversed
//E: "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
//E: None given.
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - turn the string into an array with .split(' ')
// 3 - use .map() to loop through the array and transform any words with 5 or more characters
// 4 - so, we have .map(word => ), then use comparison logic word.length >= 5, then use a ternary operator to do if/else
// 5 - if word is >= 5, then do word.split('').reverse().join(''), otherwise word
// 6 - then make sure you turn the array back into a string with .join(' ')
// 7 - return the value and call the function





//TOP SOLUTIONS FROM CODEWARS USERS:


















