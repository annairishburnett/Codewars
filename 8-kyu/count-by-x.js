//CODEWARS CODING CHALLENGE DESCRIPTION:

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function with two arguments that will return an array of the first n multiples of x. Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array.
//R: An array of numbers
//E: x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]
//P: Psuedo code -> see comments in solution


//Create a function that takes in a number and a multiplier, x
function countBy(num, x){
    let array = [];//initialize a new empty array
    
    //create a for loop that runs until it is equal to the multiplier, x
    for(let i = 1; i <= x; i++){
        let value = num;//create a value that's equal to num
        value = i * num;//make that value equal to num * i

        array.push(value);//add value to the array above
    }
    return array;//return array
}

console.log(countBy(2,5));




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

const countBy = (x, n) =>
    [...Array(n)].map((_, idx) => ++idx * x);




//EXPLANATION FOR CODE ABOVE: