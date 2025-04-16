//CODEWARS CODING CHALLENGE DESCRIPTION:

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Create a function that takes in an array of 10 integers (between 0 and 9). No letters, special characters, or funny business? No
//R: Returns a string of those numbers in the form of a phone number. The returned format must be correct in order to complete this challenge. Don't forget the space after the closing parentheses!
//E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => returns "(123) 456-7890"
//E: None given.
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in an array
// 2 - simple and not very elegant, but you could use a template string and the array indices 
// 3 - return the value and call the function


//1ST ITERATION
let cellNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(arr){
        return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}

console.log(createPhoneNumber(cellNum)); //"(123) 456-7890"
//Works in VSCode, but very WET code - think of another simpler way to do this
        //You could create a variable with let and set it equal to an empty string
        //Then use forEach to iterate through the array with num and index, then use if/else conditional statements to build up the sentence - but that would get awkward with the parenthesis, the space, and the dash
                //Check MDN to see if there's a way to select a range of elements with indices instead of one by one
                //Duh, .slice() method does that
                //So try the function above but use .slice() instead of selecting the array elements individually with their indices


//2ND ITERATION
let cellNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber1(arr){
        return `(${arr.slice(0,3)}) ${arr.slice(3,6)}-${arr.slice(6,10)}`;
}

console.log(createPhoneNumber1(cellNum2));
//Returns: (1,2,3) 4,5,6-7,8,9,0 as a string
//Add .join('') with no spaces after each slice to turn them into single strings without commas



//3RD ITERATION
let cellNum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber2(numbers){
        return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,10).join('')}`;
}

console.log(createPhoneNumber2(cellNum3));
//Success! Good job refactoring and debugging :-) Now check it on Codewars!



//TOP SOLUTIONS FROM CODEWARS USERS:


















