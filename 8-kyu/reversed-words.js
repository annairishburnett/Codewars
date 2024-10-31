//CODEWARS CODING CHALLENGE DESCRIPTION:

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Complete the solution so that it reverses all of the words within the string passed in. Words are separated by exactly one space and there are no leading or trailing spaces.
//R: a string that is reversed
//E: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//E: None listed
//P: Psuedo code -> see comments in solution


//create a function that takes in a string and reverses it:
//Use split, reverse, join
const reverseWords = (str) => str.split(" ").reverse().join(" ");



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}


//Same as above but in arrow function form
const reverseWords = (str) => str.split(" ").reverse().join(" ");


//I don't think the .trim() method is necessary
function reverseWords(str){
    return str.trim().split(' ').reverse().join(' '); // reverse those words
}


//More complex version using for loop
function reverseWords(str){
    var reverse = [];
    var words = str.split(" ");
    for(let i=words.length-1; i>=0; i--){
      reverse.push(words[i]);
      
    }
    return reverse.join(" ")
}















