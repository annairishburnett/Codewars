// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL




//MY SOLUTION:

let string = "A1,B2";

function array(string){
    return string.split(',').length < 3 ? null : string.split(',').slice(1, -1).join(' ');
}

console.log(array(string));





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}

const array = (arr) => {
    arr = arr.split(',')
    arr.pop()
    arr.shift()
    return arr.join(' ') === '' ? null : arr.join(' ')
}

function array(arr){
    var data = arr.split(',');
    data.pop()
    data.shift();
    return data.length ? data.join(' ') : null;
    }