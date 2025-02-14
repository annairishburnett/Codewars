//CODEWARS CODING CHALLENGE DESCRIPTION:


// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input is a a string, name with a space between it, may or may not be capitalized
//R: return 'Hello {Name}!' with the name capitalized
//E: "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"
//E: no edge cases
//P: Psuedo code -> see comments in solution

//create a function that takes in a string
//create a variable name and set it equal to the string converted to an array with .split('')
//once it's an array use .map(letter, index) to change first element .toUpperCase(), with index === 0 and the rest .toLowerCase()
//use .join('') to turn it back into a string
//return template literal `Hello ${Name}'
//call the function, pass in an argument


//1st Iteration
function greetMe(name){
    const name = name.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');
    return `Hello ${name}!`;
}

console.log(greetMe('anna'));
//Uncaught SyntaxError: Identifier 'name' has already been declared
//Oops, I made the parameter in the function and the variable inside the same :-|


//2nd Iteration
function greetMe(str){
    const name = str.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');
    return `Hello ${name}!`;
}

console.log(greetMe('anna'));


//3rd Iteration (in Codewars format)
const greet = function(name){
    const n = name.split('').map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('');
    return `Hello ${n}!`;
};
//Success!


//TOP SOLUTIONS FROM CODEWARS USERS:


//Created a string prototype and used that within the greet function

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

var greet = function(name) {
return "Hello " + name.capitalize() + "!";
};



//Ohh I like this one too, with .slice(1) - classic!
var greet = function(name) {
    return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};



//similar to above but with template literal, even cleaner!


var greet = function(name) {
    return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
};



//I need to look into substrings
var greet = function(name) {
    return "Hello " + name.substring(0,1).toUpperCase() + name.slice(1).toLowerCase()+"!";
};

