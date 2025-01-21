//CODEWARS CODING CHALLENGE DESCRIPTION:


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Your task is to write a function that takes a string and return a new string with all vowels removed.
//R: a string with no vowels
//E: "This website is for losers LOL!" --> "Ths wbst s fr lsrs LL!"
//P: Psuedo code -> see comments in solution


let string = "This website is so funny LOL!";

//create a function that removes uppercase and lowercase vowels and returns the new string
function disemvowel(str){
    return str.replace(/[aeiouAEIOU]/gi, '');
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


disemvowel = str => str.replace(/[aeiou]/gi,'');



const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}


function disemvowel(str) {
    return (str || "").replace(/[aeiou]/gi, "");
}