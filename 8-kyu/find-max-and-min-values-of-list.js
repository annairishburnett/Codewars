//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: make two functions that receive a list of integers as input
//R: return the largest and lowest number in that list (each function returns one number)
//E: [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
//P: Psuedo code -> see comments in solution








//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


///

var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}


////


var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}