//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).


// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"
// ShortLongShort.solution("1", "22"); // returns "1221"
// ShortLongShort.solution("22", "1"); // returns "1221"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
//R: a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside
//E: ("1", "22") --> "1221"
// ("22", "1") --> "1221"
//E: the string may be empty ( zero length )
//P: Psuedo code -> see comments in solution


//1st Iteration
//create a function that takes in two parameters
function solution(a, b){
    if(a.length > b.length) return `${b}${a}${b}`//if a is longer than b, return a sandwiched by b
    else if(a.length < b.length) return `${a}${b}${a}`//else if a is shorter than b, return b sandwiched by a
}//should refactor with a ternary operator:


//2nd Iteration
function solution(a, b){
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}



// Using if...else, explicit block syntax
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

// Using if..., implicit else, compressed syntax
function solution(a, b) {
    if (a.length < b.length) return a + b + a;
    return b + a + b;
}

// Using ternary conditional operator
function solution(a, b) {
    return (a.length < b.length) ? (a + b + a) : (b + a + b);
}

// ES6 arrow function
var solution = (a, b) =>
    (a.length < b.length) ? (a + b + a) : (b + a + b);



const solution = (a, b) => {
    return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}








