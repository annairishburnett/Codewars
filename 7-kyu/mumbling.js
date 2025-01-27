//CODEWARS CODING CHALLENGE DESCRIPTION:


// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: The parameter of accum is a string which includes only letters from a..z and A..Z.
//R: return a string of letters separated by a dash. Each segment of letters begins with an uppercase letter (from the original string) and is followed by lowercase letters. For each consecutive letter, add one more lowercase letter than the previous letter. 
//E: accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
//E: None listed. 
//P: Psuedo code -> see comments in solution
        //#1: create a function that takes in a string
        //#2: return a string of letters separated by a dash. Each segment of letters begins with an uppercase letter (from the original string) and is followed by lowercase letters. For each consecutive letter, add one more lowercase letter than the previous letter. 


//1st Iteration
let string = "abcd";

function accum(str){
    let arr = str.toUpperCase().split('');

    for(let i = 0; i < arr.length; i++){
        arr = arr.map(letter => letter + letter.toLowerCase().repeat(i)) 
    }
    return arr;
}
console.log(accum(string))// Supposed to return: "A-Bb-Ccc-Dddd", but returns: ['Aaaaaaaaaaaaaaaaaaaaaaaa', 'Bbbbbbbbbbbbbbbbbbbbbbbb', 'Cccccccccccccccccccccccc', 'Dddddddddddddddddddddddd'] --> I knew I didn't convert it back into a string yet, I was just trying to get the repetition of letters correct




//2nd Iteration
let str = "abcd";

//create a function that takes in a string
function accum(s){
    let arr = s.toUpperCase().split('');//turn the string into an array of all uppercase letters
    let newArr = [];//create a new empty array

    //loop through the array and create the parameters of letter and index
    arr.forEach((letter, index) => {
        newArr.push(letter + letter.toLowerCase().repeat(index))//take the letter from "arr" and add to it the same letter but lowercase the number of times of the current index, and because the index starts with zero and we already have one uppercase letter it will equal the correct number of increasing letters 
        
    });

    return newArr.join('-');//join the array elements back together into a string with a dash separating each section of repeating letters and return them 
}

console.log(accum(str))// "A-Bb-Ccc-Dddd"
//This iteration worked in VSCode/browser. 




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


//Ahh, so you can condense it and remove the "newArr" and forEach parts above. I forgot that with map you could include the index :-|
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


function accum(s) {
	return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}


//similar to my response
function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}


function accum (s) {
	return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}


//different way of organizing the function
function accum(s) {
    return s
      .split('')
      .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
      .join('-')
  }













