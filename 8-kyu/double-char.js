//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//R: return a string in which each character (case-sensitive) is repeated once.
//E: * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
//P: Psuedo code -> see comments in solution


//1st Iteration
function doubleChar(str) {
    let arr = str.split('');
      let newArray = [];
  
      arr.forEach(char => {
          newArray.push(char.repeat(2));
      })
  
      let newString = newArray.join('');
      return newString;
}


//2nd Iteration
const doubleChar = str => str.split('').map(char => char.repeat(2)).join('');




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const doubleChar = (str) => str.split("").map(c => c + c).join("");


function doubleChar(str) {
	var word = '';
  for (var i = 0; i < str.length; i++){
  	word = word + str[i] + str[i];
  };
  return word;
};


//Not sure how this one works...???
function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}


function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
}

