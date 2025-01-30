//CODEWARS CODING CHALLENGE DESCRIPTION:


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//R: return a string with all of the letters in each word reversed
//E: "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
//E: None given.
//P: Psuedo code -> see comments in solution


//1st Iteration
//create a function that takes in a string
function reverseWords(str){
    return str.split(' ').map(word => word.reverse()).join(' ');
}
//Didn't work - word.reverse() is not a function


//2nd Iteration
function reverseWords(str){
    return str.split(' ').map(word => word.split('').reverse()).join(' ');
}
//Closer, but returned: s,i,h,T s,i n,a !,e,l,p,m,a,x,e
//Try putting .join('') at the end of .reverse()


//3rd Iteration
function reverseWords(str){
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
//It worked!





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

//same concept as my solution
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
}


//this one doesn't split at the spaces between words, it splits every element, then reverses them, joins them without spaces, reverses them again, and then joins them with spaces --> slightly mind-bending
function reverseWords(str) {
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


//same as my solution, easier to follow the logic than the solution above
function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}


//look up how this one works
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)








