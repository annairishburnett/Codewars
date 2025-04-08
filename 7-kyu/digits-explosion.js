//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input is a string made of digits [0-9], no letters, symbols, special characters, empty strings, or funny business? no
//R: return a string where each digit is repeated a number of times equals to its value
//E: "312" should return "333122"
// "102269" should return "12222666666999999999"
//E: none given
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - use .split('') to turn the string into an array (nums will still be strings)
// 3 - use .map(num => num.repeat(num) -> not sure if that works because they are still strings, JS might auto convert them, or might have to convert the string into a number: num.repeat(Number(num)), try without first
        //JS auto converted the string into a number
// 4 - use .join('') to convert array back into a string
// 5 - return the value and call the function


//1ST ITERATION
let string = "312";

function explode(s){
    return s.split('').map(num => num.repeat(num)).join('');
}

console.log(explode(string));
//First try!!! Worked on VSCode, now to try with Codewars.
//Worked!




//TOP SOLUTIONS FROM CODEWARS USERS:


//Same as my solution, but they added the + operator to turn the string into a number in the .repeat() method, which is a good idea, basically the same as my idea to use Number() but more concise
function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
}


//Used a regex with .replace instead of .map -> I don't understand that regex, look up later
const explode = s => s.replace(/\d/g, d => d.repeat(d));



//Used a for loop and a new string with concatenation
function explode(s) {
    let newStr = "";
    for (let i = 0; i < s.length; i++) {
      for (let num = s[i]; num > 0; num--) {
        newStr += s[i]
      }
    }
    return newStr
}



//Used the spreader [...] instead of .split(''), otherwise the same
explode=s=>[...s].map(n=>n.repeat(n)).join``



//Very WET code, used if/else conditional and created a new array, adding numbers with .push, then .join('') to convert back into a string,create variable "split" and then didn't use it
function explode(s) {
    let arr = [];
    let split = s.split("");
    for (let item of s) {
      if (item == "1") {
        arr.push("1");
      } else if (item == "2") {
        arr.push("22");
      } else if (item == "3") {
        arr.push("333");
      } else if (item == "4") {
        arr.push("4444");
      } else if (item == "5") {
        arr.push("55555");
      } else if (item == "6") {
        arr.push("666666");
      } else if (item == "7") {
        arr.push("7777777");
      } else if (item == "8") {
        arr.push("88888888");
      } else if (item == "9") {
        arr.push("999999999");
      }
    }
    return arr.join("");
  }







