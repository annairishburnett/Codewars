//CODEWARS CODING CHALLENGE DESCRIPTION:

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
//R: a string (that is the original string with the first and last characters removed)
//E: 'Hello' --> 'ell'
//P: Psuedo code -> see comments in solution


//Create a function that takes in a string
function removeChar(str){
    //ignore strings with less than 2 characters
    if(str.length > 2) {
      return str.substring(1,str.length-1);//if string is longer than 2 characters, return a substring with first and last characters removed
    } else {
      return '';
    }
};




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const removeChar = str => str.slice(1,-1)

function removeChar(str) {
    return str.slice(1, -1);
}

function removeChar(str){
    return str.substring(1, str.length-1);
};

function removeChar(str){
    //You got this!
     str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
};





