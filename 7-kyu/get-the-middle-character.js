//CODEWARS CODING CHALLENGE DESCRIPTION:

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"






//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
//R: return the middle character(s) of the string. If the string's length is odd, return the middle character. If the string's length is even, return the middle 2 characters.
//E: "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"
//P: Psuedo code -> see comments in solution


//1st Iteration === wrong middle characters for even string
let string = 'test';

function getMiddleChar(str){
    const length = str.length;
    const oddMiddle = Math.floor(str.length / 2);

    if(length % 2 === 0){
        return str[length/2] + str[length/2 + 1];
    }else{
        return str[oddMiddle]
    }
}



//2nd Iteration === worked
function getMiddle(s){
    const length = s.length;
    const oddMiddle = Math.floor(s.length / 2);

    if(length % 2 === 0){
        return s[length/2 - 1] + s[length/2];
    }else{
        return s[oddMiddle]
    }
}


//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


function getMiddle(s) {
    var middle = s.length / 2;
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
}


function getMiddle(s){
  return s.slice((s.length-1)/2, s.length/2+1);
}


function getMiddle(s){
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
  
}
