//CODEWARS CODING CHALLENGE DESCRIPTION:



// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//R: a string with no exclamation marks
//E: 'Hello!' --> 'Hello'
//P: Psuedo code -> see comments in solution


//create a function that takes in a string
//remove all exclamation marks and return a string
const removeExclamationMarks = s => s.replace(/!/g,"") ;



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}

const removeExclamationMarks = s => s.replace(/!/g,"") ;



