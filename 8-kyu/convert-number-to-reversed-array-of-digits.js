//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]



//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: random non-negative number
//R: return the digits of this number within an array in reverse order
//E:35231 => [1,3,2,5,3]
// 0 => [0]
//P: Psuedo code -> see comments in solution



function digitize(n) {
    let array = n //Initialize the array 
      .toString() //Convert number to a string so you can use the .split() method
      .split('') //Split the string into individual strings of single characters
      .reverse() //Reverse the order of the string characters
      .map(Number); //Convert each string character back into a number
    
    return array
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}

function digitize(n) {
    return Array.from(String(n), Number).reverse();
}

function digitize(n){
    return (n + '').split('').map(Number).reverse();
}




