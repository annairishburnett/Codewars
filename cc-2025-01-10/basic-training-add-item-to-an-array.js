//CODEWARS CODING CHALLENGE DESCRIPTION:

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Add a string to the array "websites" that has already been initialized
//R: Return an array with the string "codewars"
//E: [] => ['codewars']
//P: Psuedo code -> see comments in solution


//Initialize arrow function addToArray
var websites = []; 

let website = 'codewars';

const addToArray = value => websites.push(value); //Pushes value into array "websites"

addToArray(website);

console.log(websites);








//OTHER TOP SOLUTIONS FROM CODEWARS USERS:



websites.push('codewars') // add the value "codewars" to the already defined websites array



//EXPLANATION FOR CODE ABOVE:

//They weren't asking for a function, just for the value "codewars" to be added to the already defined array "websites" - I made it more complicated than necessary. 