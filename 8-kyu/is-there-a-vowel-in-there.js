//CODEWARS CODING CHALLENGE DESCRIPTION:

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121] => [100,100,116,"i","u",121] output Return the resulting array.



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input will be an array of numbers.
//R: If any of the numbers are the character codes for lower case vowels (a, e, i, o, u), return the array with those numbers converted to the corresponding string of that vowel.
//E: [100,100,116,105,117,121] => [100,100,116,"i","u",121]
//E: No edge cases are listed. Will there be any empty arrays? The assumption is no. 
//P: see steps below

//Pseudo Code:
// 1 - create a function that takes in an array
// 2 - create an object within that function using const = pairs with key value pairs that have the character codes for the lower case vowels as the key and their corresponding string as the value
// 3 - use .map to loop through the array, with num as the parameter
// 4 - use if statement to check if the object pairs has num with [] brackets, if yes, return pairs[num]
// 5 - if no, return num
// 6 - call the function, console.log the results


//1st Iteration:

let array = [100, 100, 116, 105, 117, 121];

function isVowel(arr) {
  const pairs = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
  };

  return arr.map(num => {
    // if num matches one of the vowel char codes, replace it
    if (pairs[num]) {
      return pairs[num];
    }
    // otherwise keep it as a number
    return num;
  });
}

console.log(isVowel(array));// → [100, 100, 116, "i", "u", 121]




//TOP SOLUTIONS FROM CODEWARS USERS:

















