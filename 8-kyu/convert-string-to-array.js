//CODEWARS CODING CHALLENGE DESCRIPTION:



// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Write a function to split a string and convert it into an array of words
//R: an array of strings
//E: "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
//P: Psuedo code -> see comments in solution


//create a function that takes in a single parameter (a string) 
function stringToArray(string){
    return string.split(' ');//split the string at the spaces and return the resulting array
}



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const stringToArray = string => string.split(' ');

function stringToArray(string){
    return string.split(' ');
}





