//CODEWARS CODING CHALLENGE DESCRIPTION:


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//R: true or false
//E: "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
//P: Psuedo code -> see comments in solution



//1st Iteration
function isogram(str){
    const arr1 = str.toLowerCase().split('');
    const arr2 = arr1.slice();
    

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return false;
            }else{
                return true;
            }
        }
    }

}
//Not working because of course the exact copy of a word is going to have all the same letters as its original :-|
//Also tried a for of loop instead of a for each loop



//2nd Iteration
function isogram(str){
    const arr = str.toLowerCase().split('');
  
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i - 1]){
            return true
        }
    }
    return false;
}
//This iteration doesn't work because the same characters might not be right next to each other, so it has to be .includes() instead of arr[i] !== arr[i - 1]



//3rd Iteration
function isogram(str){
    const arr = str.toLowerCase().split('');
  
    for(let i = 1; i < arr.length; i++){
        if(!arr[i].includes(arr[i])){
            return true
        }
    }
    return false;
}
//This iteration doesn't work because the word includes at least one copy of each letter, I have to check for including more than one copy of each letter


//4th Iteration
//What if I split the word at each character and determined if the length was longer than 1 (is that the right number?) and then if any lengths were longer than 1, it's false, otherwise true?
function isIsogram(str){
    const arr = str.toLowerCase().split('');
    
    for(let i = 0; i < arr.length; i++){
        if(str.split(arr[i]).length - 1 > 1){
            return false;
        }
    }
    return true;
}
//It works! My theory was correct
//Codewars Error: same chars may not be same case: expected true to equal false
//Will this fix it???
//5th Iteration
function isIsogram(str){
    const arr = str.toLowerCase().split('');
    
    for(let i = 0; i < arr.length; i++){
        if(str.split(arr[i].toLowerCase()).length - 1 > 1){
            return false;
        }
    }
    return true;
}
//Nope, try again:

//6th Iteration
//Did some Googling, remembered Set() constructor function, tried for of loop again, found Set.prototype.has() method in MDN
function isIsogram(str) {
    // Convert the input string to lowercase to ignore case sensitivity
    str = str.toLowerCase();
    
    // Create an empty set to store unique characters
    let unique = new Set();
    
    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the set, it's a duplicate, return false
        if (unique.has(char)) {
            return false;
        }
        // Otherwise, add the character to the set
        unique.add(char);
    }
    
    // If no duplicates were found, the string is an isogram
    return true;
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
}

//Ahh, here is what I was trying to do with my first iteration
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
}


function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
}



