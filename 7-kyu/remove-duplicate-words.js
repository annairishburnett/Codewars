//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output: 'alpha beta gamma delta'






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: a string with multiple words in it separated by spaces, that contains repeat words. Will there be any empty strings, numbers, or other funny business? No
//R: a string derived from the input string that contains no repeated words
//E: Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output: 'alpha beta gamma delta'
//E: No edge cases were given.
//P: Psuedo code -> see comments in solution

//1 - create a function that takes in a string
//2 - split the string into an array using .split(' '), then use new Set(str) to get only unique elements
//3 - use .join(' ') with a space to turn array of no repeated words back into a string
//4 - return the result and call the function

//1st ITERATION:

let string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

function removeDuplicateWords(str){
    return new Set(str.split(' ')).join(' ');
}

        //Variation that also didn't work:

        function removeDuplicateWords(str){
            return (new Set(str.split(' '))).join(' ');
        }
        //Looking back, this variation didn't work because I need to wrap the new Set... in square brackets for an array []
        //also needed to add the ... to ??

console.log(removeDuplicateWords(string));

//new Set doesn't work for words, only individual characters



//2nd ITERATION
//use .split(' ') to turn string into an array
//create a new variable, noDuplicates, and set it equal to an empty array that we can add words to
//loop through array we created by splitting the string using forEach
//check each word using !noDuplicates.includes(word) to make sure the array doesn't already include said word
//if the array doesn't include the word, use noDuplicates.push(word) to add the word
//use .join(' ') to turn the array noDuplicates back into a string, then returen it and call the function


function removeDuplicateWords(s){
    const arr = s.split(' ');
    let noDuplicates = [];

    arr.forEach(word => {
        if(!noDuplicates.includes(word)){
            noDuplicates.push(word)
        }
    });

    return noDuplicates.join(' ');
}

console.log(removeDuplicateWords(string));




//TOP SOLUTIONS FROM CODEWARS USERS:


//Okay, so new Set does work, just not the way I was trying to use it. Good to know!
//Look up how this works :-)
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')


//Okay, this one makes sense!
const removeDuplicateWords = s => {
    const set = new Set(s.split(' '));
    return Array.from(set).join(' ');
}


//Similar solution compared with mine
const removeDuplicateWords = s => {
    let arr = s.split(" ");
    let sFiltered = [];
    
    for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)
    
    return sFiltered.join(" ")
  }


//Hmm, not sure how this one works
function removeDuplicateWords (s) {
  return s.split(' ').filter((n, i, s) => {
    return s.indexOf(n) === i;
  }).join(' ');
}



