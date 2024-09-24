//CODEWARS CODING CHALLENGE DESCRIPTION:


// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.



//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: You will be give a boolean value, create a function that converts it to its string representation
//R: a string
//E: true --> 'true'
//P: Psuedo code -> see comments in solution


//First iteration
const booleanToString = b => b === true ? 'true' : 'false';

//Second iteration (b === true in 1st iteration is unnecessary)
const booleanToString = b => b ? 'true' : 'false';


//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function booleanToString(b){
    return b.toString();
}

function booleanToString(b){
    return b ? 'true' : 'false';
}

function booleanToString(b){
    return String(b);
}

function booleanToString(b){
    return `${b}`
}



