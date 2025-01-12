// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).




//MY SOLUTION:


function sumOfDifferences(arr) {
    if (arr.length < 2) return 0; 
  
    const sorted = arr.sort((a,b) => b - a); //[10, 2, 1]
    let sum = 0;
  
    for(let i = 0; i < sorted.length - 1; i++){
        sum += sorted[i] - sorted[i + 1];
    }
  
    return sum;
  }





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}



const sumOfDifferences = arr =>
    arr.sort((a, b) => b - a).shift() - arr.pop() || 0;