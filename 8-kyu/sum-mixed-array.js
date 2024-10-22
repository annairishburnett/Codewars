//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//R: return the sum of the array values as if all were numbers. Return your answer as a number.
//E: None given
//P: Psuedo code -> see comments in solution




//create a function that takes in an array of strings and numbers
//convert everything to numbers
//get sum of every element
//return sum
const sumMix = x => x.map(Number).reduce((acc, c) => acc + +c);




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}

function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}

const sumMix = x => x.reduce((a,b) => + b + a, 0)

const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);



