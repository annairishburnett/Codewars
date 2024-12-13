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

//Used a for loop, var instead of let or const to create the character from the code with String.fromCharCode, then checked to see if that character was a vowel with .indexOf !=== -1 (-1 is what indexOf returns if the element you're looking for doesn't exist), then if it's a vowel converts that element to its character, otherwise returns the number  
function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}


//Ternary operator version of code above
const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)


//My solution but separated into a separate object and an arrow function
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)










