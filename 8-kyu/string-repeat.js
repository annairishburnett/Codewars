//CODEWARS CODING CHALLENGE DESCRIPTION:


// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Write a function that accepts an integer n and a string s as parameters
//R: a string of s repeated exactly n times
//E: 6, "I" -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"
//P: Psuedo code -> see comments in solution



//create an arrow function that takes in two parameters, n and s, the repeat s n times
const repeatStr = (n,s) => s.repeat(n) ;



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

repeatStr = (n, s) => s.repeat(n)

function repeatStr (n, s) {
    return s.repeat(n);
}

function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
}



