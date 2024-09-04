//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function that does four basic mathematical operations. The function should take three arguments - operation(string/char), value1(number), value2(number).
//R: The function should return result of numbers after applying the chosen operation.
//E: Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
//P: Psuedo code -> see comments in solution


function basicOp(char,n1,n2){
    if(char === '+'){
      return n1 + n2;
    }else if(char === '-'){
      return n1 - n2;
    }else if(char === '*'){
      return n1 * n2;
    }else if(char === '/'){
      return n1 / n2;
    }else{
      alert("Enter an operator ('+', '-', '*', or '/'):");
    }
}
  
console.log(basicOp('/',2,2));





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}


//This solution had a warning that it was unsafe?
function basicOp(o, a, b) {
    return eval(a+o+b);
}


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}
