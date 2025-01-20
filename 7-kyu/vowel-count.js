//CODEWARS CODING CHALLENGE DESCRIPTION:


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: The input string will only consist of lower case letters and/or spaces. We will consider a, e, i, o, u as vowels for this Kata (but not y).
//R: Return the number (count) of vowels in the given string
//E: 'yes' --> 1
// 'hello --> 2
//P: Psuedo code -> see comments in solution


//First Iteration
//create a function that takes in a string
//create a count variable that starts at zero
//loop through the characters in the string and add 1 to the count each time there is a vowel
//return the count
let string = 'hello';

function vowelCount(str){
    let count = 0;

    if(str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')){
        count++
    }
    return count;
}//this won't loop through each of the characters


//Second iteration
function countVowels(str){
    let count = 0;
    const arr = str.split('');

    for(let char of arr){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++
        }
    }
   
    return count;
}





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   
}

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
}