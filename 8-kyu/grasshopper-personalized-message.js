//CODEWARS CODING CHALLENGE DESCRIPTION:


// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//R: Return "Hello boss" or "Hello guest"
//E: name equals owner	'Hello boss'
// otherwise	'Hello guest'
//P: Psuedo code -> see comments in solution



//create a function that takes in two parameters, name and owner
//compare if name is equal to owner
//if name is equal to owner, return 'Hello boss', otherwise 'Hello guest'
const greet = (name, owner) => name.toLowerCase() === owner.toLowerCase() ? 'Hello boss':'Hello guest'




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest';

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
}

function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
}

function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss';
    }
    return 'Hello guest';
}



