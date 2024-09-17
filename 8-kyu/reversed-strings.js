//CODEWARS CODING CHALLENGE DESCRIPTION:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function that reverses the string passed into it.
//R: a string
//E: 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//P: Psuedo code -> see comments in solution



//Create a function that takes in one parameter, a string
function solution(str){
    return String(str).split('').reverse().join(''); //turn the string into an array, reverse the elements, then join them together again with no spaces.
}


//Not sure why I thought I needed the String() constructor function with my first iteration
function solution(str){
    return str.split('').reverse().join(''); 
}



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const solution = str => str.split('').reverse().join('');

function solution(str){
    return str.split('').reverse().join('');  
}

const solution = str => [...str].reverse().join('')






