// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Is it always going to be integers? Are we going to be given any negative numbers or zero? An empty arr ever?
//R: Return an array of elements which are multiples of their own index in the input array
//E: [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
    // [68, -1, 1, -7, 10, 10] => [-1, 10]
    // [0,2,3,6,9] => [0, 2, 6]
//P: Psuedo code -> see comments in solution



//Initial attempt at solution:
// function multipleOfIndex(arr){
//     return arr.filter((num, index) => num % index === 0 || null);
// }
//This didn't work because 0 was excluded from the resulting array -> [0,2,3,6,9] = [2,6]



let array = [0,2,3,6,9];

function multipleOfIndex(arr){
    if (arr.length <= 1) return null; //Ensure length of array is > 1
    let result = arr.filter((num, index) => num % index === 0); //Create filter to keep only elements that are multiples of their own index
    if (arr[0] === 0) {
        result.unshift(0); // Ensure 0 is at the start if present at index 0
    }
    return result;
}

console.log(multipleOfIndex(array)); // [0, 2, 6]




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function multipleOfIndex(array) {
    return array.filter((x,i) => x === 0 || x % i === 0)
}


//Explanation for code above: 
// This has two parts connected by the || (logical OR) operator. The condition is true if either part is true.

// num === 0:
// This explicitly allows num to be 0, regardless of the index.
// Without this condition, the modulo operation with index would usually fail because division by zero is undefined. However, since 0 is a valid number we want to include, this check ensures it is kept in the result.
// Index 0, num = 0:
// num % index is undefined because division by 0 is not allowed. However, the second condition num === 0 is true, so this number is included.


