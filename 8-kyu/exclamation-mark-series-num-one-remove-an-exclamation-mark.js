//CODEWARS CODING CHALLENGE DESCRIPTION:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//1 - create a function that takes in a string
//2 - use .replaceAll() and select '!', or could use .replace() with the g global flag to select all and replace with an empty string ''
//3 - return the string and call the function, console.log() result to check function is working


let string = "!Hi!!!";

function removeExclamationMarks(str){
    return str.replace(/!/g, '');
}

console.log(removeExclamationMarks(string));
//Didn't work with .replace(/'!'/g, ''), but worked with .replaceAll('!', '')
//Ohh, right, I don't need the quotations around the ! exclamation mark with the regex
//Now it works :-) 


//2nd Iteration with codewars function name and params
function remove(string){
    return string.replace(/!/g, '');
}
//Oops, misread description and examples - remember not to rush and assume I know what they want me to do without fully processing the directions :-)
//Directions: Remove an exclamation mark from the end of a string

//3rd Iteration
//use ternary operator ? : and if === .endsWith('!') return string.slice(0,-1) to return entire string but last character

function remove(string){
    return string.endsWith('!') ? string.slice(0,-1) : string;
}

console.log(remove(string));// !Hi
//Worked on VS Code, now test on Codewars
//It worked! 




//TOP SOLUTIONS FROM CODEWARS USERS:

//Used an arrow function and a $ sign in a regex, which must mean that it selects the character at the end. Look this up!
const remove = s => s.replace(/!$/, '');

    //What /!$/ means:
        // ! matches a literal exclamation mark.
        // $ is an anchor in regular expressions that matches the end of a string.

    // So:
        // /!$/ matches a single exclamation mark only if it's at the very end of the string.



//Same as my answer
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}


//Uses square brackets to select character at the end of the string and check if it's equal to !, then same as my answer
function remove(s){
  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}











