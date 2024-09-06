//CODEWARS CODING CHALLENGE DESCRIPTION:

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//R: Returns the string "Even" or "Odd"
//E: 1 --> "Odd"
//2 --> "Even"
//P: Psuedo code -> see comments in solution




function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    }
    else {
      return "Odd"
    }
}






//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even'; 

function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

function evenOrOdd(number) {
    if (number % 2 == 0){
      return "Even"
    }else{
      return "Odd"
      }
}



