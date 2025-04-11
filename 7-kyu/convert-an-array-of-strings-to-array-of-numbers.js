//CODEWARS CODING CHALLENGE DESCRIPTION:

// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input is an array of numbers represented as strings. Will there be any letters, special characters, empty arrays, or funny business? Yes - floated values (numbers with decimals)
//R: an array of numbers
//E: ["1", "2", "3"] to [1, 2, 3]
//E: Note that you can receive floats as well
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in an array
// 2 - use .map(Number), but I don't know if that works with floated values
// 3 - return the array and call the function

//1ST ITERATION

let array = ["1.2", "2.3", "3.4"];

function toNumberArray(stringarray){
        return stringarray.map(Number);
}

console.log(toNumberArray(array)); // [1.2, 2.3, 3.4]
//Worked with integers, test with floated values
//Worked with floated values, too
//Check on Codewars - yep, it worked! 
//This one felt very easy, maybe time to start doing some 6 kyu? :-)




//TOP SOLUTIONS FROM CODEWARS USERS:


















