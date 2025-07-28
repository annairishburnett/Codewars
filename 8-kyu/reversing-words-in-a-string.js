//CODEWARS CODING CHALLENGE DESCRIPTION:

// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// Happy coding!






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input will be a string of at least two words that may have 
//R: return the string with the words reversed, words remained capitalized and if the word had a period after it the period moves with it
//E: "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
//E: might have punctuation at the end of each string, might have straining spaces
//P: Psuedo code -> see comments in solution


//1 - create a function called reverseWords that takes a string as an argument
//2 - use .split(' ') to separate the words where there are spaces
//3 - use .reverse() to reverse the words, then .join(' ') to join them back together
//4 - use .trim() to remove any trailing spaces
//5 - return the value, call the function and pass in an argument, and console.log the result to check if it's correct

//1st Iteration
let string = "Hi There.";

function reverseWords(str){
    return str.split(' ').reverse().join(' ').trim();
}

console.log(reverseWords(string));
//Success!




//TOP SOLUTIONS FROM CODEWARS USERS:














