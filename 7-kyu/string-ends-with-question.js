//CODEWARS CODING CHALLENGE DESCRIPTION:


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//R: returns true if the first argument(string) passed in ends with the 2nd argument (also a string), or false if it doesn't
//E: solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//E: none given
//P: Psuedo code -> see comments in solution
        // 1: create a function that takes in two arguments(both strings)
        // 2: compare if first string ends with the second string
        // 3: return true or false


//1st Iteration
//1
function solution(str, ending){
    return str.endsWith(ending) || false;//2 and 3
}

console.log(solution('Hello there love', 'love'));
//Works with VSCode in the browser, works for Codewars





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

//ahh, good point, you don't need the "|| false"
function solution(str, ending){
    return str.endsWith(ending);
}


const solution = (str, ending) => str.endsWith(ending);


function solution(str, ending){
    return str.substr(-ending.length) == ending;
}


function solution(str, ending){
    return str.slice(0 - ending.length) === ending;
}


function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
}













