//CODEWARS CODING CHALLENGE DESCRIPTION:

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.
//R: returns an integer of the count of occurrences the 2nd argument is found in the first one
//E: ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
//E: The first argument can be an empty string
//P: Psuedo code -> see comments in solution


//create a function that takes in two arguments, a string and a character
function strCount(str, letter){  
    let count = 0;//create a variable that holds the count
  
      let arr = str.split('');//split the string into an array
      //loop through the array
      arr.forEach(e => {
          if(e === letter){
              count++//if the character equals the letter, add one to the count
          }
      })
      return count;//return the count
  }
  //This is a long way of doing it, and it works. See below for better solutions. 




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function strCount(str, letter){  
    return str.split(letter).length-1
}



function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
}


const strCount = (str, letter) => str.split(letter).length - 1;


function strCount(str, letter){  
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == letter)
        count++;
    }
    return count;
}














