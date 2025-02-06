//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: The input will be a lowercase string with no spaces
//R: capitalize the letters that occupy even indexes and odd indexes separately, and return with every other letter uppercase and then lowercase, then with every other letter lowercase then uppercase
//E: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
//E: Index 0 will be considered even.
//P: Psuedo code -> see comments in solution
    //create a function that takes in a string
    //create an empty array to push results into
    //split the string into an array so you can loop through each element with map to 
    //use index % 2 === 0 to get even and odd indexes
    //use conditional statement (ternary operator) to convert even indexes to uppercase and odds to lowercase, then vice versa
    //return the new array (result)

//1st Iteration
//create a function that takes in a string
function alternateCapitalization(str){
    let result = [];//create an empty array to push results into

    //split the string into an array so you can loop through each element with map to 
    //use index % 2 === 0 to get even and odd indexes
    //use conditional statement (ternary operator) to convert even indexes to uppercase and odds to lowercase, then vice versa
    str.split('').map((char, index) => index % 2 === 0 || index === 0 ? result.push(char.toUpperCase()) : result.push(char.toLowerCase()))

    return result;
}
//Not there yet, returned: ['A', 'b', 'C', 'd', 'E', 'f']
//Have to join letters together before pushing them to the array, and then do the 2nd version, join those letters together, and push them into the new array as well
//what if we used reduce plus a memo to push results into first instead of map, then pushed that into result?


//2nd Iteration
function alternateCapitalization(str){
    let result = [];//create an empty array to push results into

    result.push(str.split('').reduce((memo, char, index) => index % 2 === 0 || index === 0 ? memo.push(char.toUpperCase()) : memo.push(char.toLowerCase()), []));

    return result;
}
//Doesn't work
//return: Uncaught TypeError: memo.push is not a function
//create 3 blank arrays to push into, 1 for AbCdEfG, 1 for aBcDeFg, and one for both, then push into those and combine
//Okay, went down the rabbit hole a bit there. Took a break and a step back and came back with this solution:

//3rd Iteration
//create a function that takes in a string
function alternateCapitalization(str){
    let result = [];//create an empty array to push results into

    //create two variables, 1 for uppercase first and one for lowercase first
    //split the string into an array, use map to loop through elements  
    let upperCaseFirst = str.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');//convert even indexes to uppercase and odd indexes to lowercase
    let lowerCaseFirst = str.split('').map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join('');//convert even indexes to lowercase and odd indexes to uppercase

    //push these two variables into array "result"
    result.push(upperCaseFirst, lowerCaseFirst);

    return result;//return result
}
//Works! Very WET, though


//Dryer version without pseudo code
function capitalize(s){
    const even = s.split('').map((char, index) => index % 2 === 0 ? 
                        char.toUpperCase() : char.toLowerCase()).join('');

    const odd = s.split('').map((char, index) => index % 2 === 0 ? 
                        char.toLowerCase() : char.toUpperCase()).join('');

    return [even, odd];
}








//TOP SOLUTIONS FROM CODEWARS USERS:

//basically the same as my answer
function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};


//not sure how this works, look it up! 

function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};



function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
            [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}


//wow, complicated! 
function capitalize(s) {
    const S = s.toUpperCase()
    let a = ""
    let b = ""
    for (let i = 0; i < s.length; ++i) {
      if (i & 1) {
        a += s[i]
        b += S[i]
      } else {
        a += S[i]
        b += s[i]
      }
    }
    return [a, b]
}


//Aha! There is a way to do it with reduce, I thought so!
function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};


//interesting way to turn it into an array at the end
capitalize = s =>
    [
      [...s].map((l,i)=>i%2?l.toLowerCase():l.toUpperCase()).join(''),
      [...s].map((l,i)=>i%2?l.toUpperCase():l.toLowerCase()).join('')
    ]



//an answer with two functions, interesting
const cap = (str, isEven) => str.split('').map( (a, i) => isEven && i % 2 === 0 || !isEven && i % 2 === 1? a.toUpperCase(): a.toLowerCase()).join('');

function capitalize(s){
  return [cap(s, true), cap(s, false)]
};