//CODEWARS CODING CHALLENGE DESCRIPTION:

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input is a string of one or more words. Any special characters, numbers, empty strings, or other funny business? No: Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//R: Return the same string, but with all words that have five or more letters reversed
//E: "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"
//E: None given.
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - turn the string into an array with .split(' ')
// 3 - use .map() to loop through the array and transform any words with 5 or more characters
// 4 - so, we have .map(word => ), then use comparison logic word.length >= 5, then use a ternary operator to do if/else
// 5 - if word is >= 5, then do word.split('').reverse().join(''), otherwise word
// 6 - then make sure you turn the array back into a string with .join(' ')
// 7 - return the value and call the function

//1ST ITERATION
let string = "Hey fellow warriors";

function spinWords(string){
        return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
}

console.log(spinWords(string));//"Hey wollef sroirraw"
//Firrssttt trrryyyy! Thinking through things with pseudo code is gettinge easier, and it's helping me not miss important steps like using .split() to convert a string into an array before applying array methods, or .join() to turn an array back into a string. Yay progress!
//Check if it works on Codewars. It does! Nice work self!


//TOP SOLUTIONS FROM CODEWARS USERS:


//Basically the same as my response, but used a function inside of .map() instead of a ternary operator
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}



//Interesting! They used .replace() and a regex with curly braces, then a function that reverses the words with 5 characters or more the same way I did it. You really need to look up how more regex variations work
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}




//Same as my answer, just slightly different conditional before the ternary operator
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}





