//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input will be a positive integer, no strings, null/undefined inputs, or other funny business
//R: if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
//E: x = 10 -> 'Help yourself to a honeycomb Yorkie for the glovebox.'
//E: no edge cases
//P: Psuedo code -> see comments in solution

//1 - create a function that takes in an integer, parameter is num
//2 - use a ternary operator and num ** 2 > 1000 to return "It's hotter than the sun!!" or "Help yourself..."
//3 - return the string, call the function, pass in an argument, and console.log the result to check if it works


//1st Iteration
let number = 10;

function squeezePie(num){
    return num**2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

console.log(squeezePie(number));
//Success!




//TOP SOLUTIONS FROM CODEWARS USERS:


//Used Math.pow(x,2) instead of x**2
function apple(x){
  return Math.pow(x, 2) > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
}


//Used if/else statement instead of ternary operator
function apple(x){
  
  if (Math.pow(x,2) > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox.";
  
  }

}














