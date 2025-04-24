//CODEWARS CODING CHALLENGE DESCRIPTION:


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input is a string, can contain spaces and special characters
//R: a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//E: "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
//E: Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
        //use .toLowerCase() to convert everything to same type of character
        //use .split('').sort().join('') to group like characters
        //
// 2 - use .replace() with a regex 1+ to check for more than one occurence, and a ternary operator to determine "(" OR ")"
// 3 - return the value and call the function
// 4 - not well-thought-out answer, but will need to do some trial and error to get a better idea of what to do

//1ST ITERATION

let string = "recede";

function duplicateEncoder(str){
        return str.toLowerCase().split('').sort().join('').replace(/([^])\1+/g, )
}

console.log(duplicateEncoder(string));// returned: cdundefinedr NOT: "()()()"
//Nope, can't actually sort them because then they won't be in the order of the original word
        //use a for loop and if/else statements to add characters to a new variable set equal to an empty string
        //make sure to convert string to all lowercase
        //can still use .match to determine if a character is repeated, just use i from the for loop as the character to match, not ([^]) any character


//2ND ITERATION
let string1 = "recede";

function duplicateEncoder1(str){
        let result = '';
        let newStr = str.toLowerCase();
        let arr = newStr.split('');

        for(let i = 0; i < arr.length; i++){
                if(newStr.split('').sort().join('').match(/i\1+/g)){
                        result += ')';
                }else{
                        result += '(';
                }
        }
        return result;
        
}

console.log(duplicateEncoder1(string1));// "()()()"
//Returned: ((((((
//The idea is getting there, but the if conditional obviously didn't work. It doesn't seem like the "i" is getting selected. Ohh! It's not supposed to be the i, it's supposed to be the arr[i]. I want the element, not the index of the element. Try that and see!


//3RD ITERATION
let string2 = "recede";

function duplicateEncoder2(str){
        let result = '';
        let newStr = str.toLowerCase();
        let arr = newStr.split('');

        for(let i = 0; i < arr.length; i++){
                if(newStr.split('').sort().join('').match(/${arr[i]}\1+/g)){
                        result += ')';
                }else{
                        result += '(';
                }
        }
        return result;
        
}

console.log(duplicateEncoder2(string2));// "()()()"

//Returned: ((((((
//Need to figure out how to select the current character from within the .match() function
//Googled: how to use a variable in .match

//4TH ITERATION
let string3 = "recede";

function duplicateEncoder3(str){
        let result = '';
        let newStr = str.toLowerCase();
        let arr = newStr.split('');

        for(let i = 0; i < arr.length; i++){

                let re = new RegExp(String.raw`\\b${arr[i]}1+\\b`, "gi");

                if(newStr.split('').sort().join('').match(re)){
                        result += ')';
                }else{
                        result += '(';
                }
        }
        return result;
        
}

console.log(duplicateEncoder3(string3));// "()()()"
//Returned: ((((((
//Asking ChatGPT for help:


//5TH ITERATION
let string4 = "recede";

function duplicateEncoder4(str) {
    let lowerStr = str.toLowerCase();
    
    return lowerStr
        .split('')
        .map((char, _, arr) =>
            arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')'
        )
        .join('');
}

console.log(duplicateEncoder4(string4)); // "()()()"
//Explanation:
        // str.toLowerCase() — makes the comparison case-insensitive.
        // .split('') — converts the string into an array of characters.
        // .map(...) — checks each character to see if it's unique or a duplicate:
                // If the first and last index of the character are the same, it's unique → '('.
        // Otherwise, it appears more than once → ')'.
        // .join('') — converts the array back into a string.
        // This version is clean, expressive, and avoids manual loops.

//Works on Codewars!


//TOP SOLUTIONS FROM CODEWARS USERS:


//Uses same basic principles, .toLowerCase(), .split(''), .map() with a function inside using indexOf and lastIndexOf, and then .join('')
function duplicateEncode(word){
     return word
       .toLowerCase()
       .split('')
       .map( function (a, i, w) {
         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
       })
       .join('');
}



//Same concept but with a for loop and an variable set to an empty string
function duplicateEncode(word){
   
        var unique='';
        word = word.toLowerCase();
        for(var i=0; i<word.length; i++){
            if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
                unique += '(';
            }
            else{
                unique += ')';
            }
        }
        return unique;
}



//One with .replace()
function duplicateEncode(word) {
        word = word.toLowerCase();
        return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}











