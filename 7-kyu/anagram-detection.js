//CODEWARS CODING CHALLENGE DESCRIPTION:


// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. Note: anagrams are case insensitive
//R: true or false
//E: "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"
//E: anagrams are case insensitive
//P: Psuedo code -> see comments in solution
        //1: create a function that takes in 2 strings
        //2: ensure all letters are either lowercase or uppercase, or account for case insensitivity in another way
        //3: compare strings: if every character matches and they are the same length, return true, otherwise false


//1st Iteration
//1
function detectAnagram(str1, str2){
    return str1.toLowerCase().match(str2.toLowerCase()) || false;//convert 1st str to lowercase, then use match method to compare str1 to str2, and add toLowerCase() on str2 to make case insensitive, it not true return false
}
//Didn't work, returned false. Match method not working properly or how I expect it to - look up on MDN.



//2nd Iteration
//Try using sort to get all of the letters in the same order, then compare them with .includes() or ===
function detectAnagram(str1, str2){
    return str1.sort((a,b)=>a-b).toLowerCase() === str2.sort((a,b)=>a-b).toLowerCase() || false;
}
//Error: str1.sort is not a function at detectAnagram
//Right... I forgot to turn the string into an array first. Try again with that update :)



//3rd Iteration
function detectAnagram(str1, str2){
    return str1.split('').sort((a,b)=>a-b).toLowerCase() === str2.split('').sort((a,b)=>a-b).toLowerCase() || false;
}
//Error: str1.split(...).sort(...).toLowerCase is not a function at detectAnagram
//Right... .toLowerCase() is a string method, not an array method. Put it on str before you split it into an array.



//4th Iteration
function detectAnagram(str1, str2){
    return str1.toLowerCase().split('').sort((a,b)=>a-b) === str2.toLowerCase().split('').sort((a,b)=>a-b) || false;
}
//Still incorrect. I got false when it should have been true. 
//Break it down to check what these snippets of code are producing in the console.log: str1.toLowerCase().split('').sort((a,b)=>a-b) AND str2.toLowerCase().split('').sort((a,b)=>a-b)
//Then figure out where to go from there
        function detectAnagram(str1, str2){
            const firstStr = str1.toLowerCase().split('').sort((a,b)=>a-b);
            const secondStr = str2.toLowerCase().split('').sort((a,b)=>a-b);
        
            console.log(firstStr);//['b', 'u', 'c', 'k', 'e', 't', 'h', 'e', 'a', 'd']
            console.log(secondStr);//['d', 'e', 'a', 't', 'h', 'c', 'u', 'b', 'e', 'k']
        }
        //they aren't getting sorted at all
        //check .sort() method on MDN - works how I think it does
        //ahh, but I was using (a,b)=>a-b to account for any potential numbers thrown in, but this function is checking for anagrams which are strings, so (a,b)=>a-b isn't necessary and maybe it doesn't work with letters?
        //Try it again without (a,b)=>a-b
        function detectAnagram(str1, str2){
            const firstStr = str1.toLowerCase().split('').sort();
            const secondStr = str2.toLowerCase().split('').sort();
        
            console.log(firstStr);//['a', 'b', 'c', 'd', 'e', 'e', 'h', 'k', 't', 'u']
            console.log(secondStr);//['a', 'b', 'c', 'd', 'e', 'e', 'h', 'k', 't', 'u']
        }
        //Success! I outsmarted myself by preemptively adding the (a,b)=>a-b when it wasn't necessary
        //Try 4th iteration again with (a,b)=>a-b removed



//5th Iteration
function detectAnagram(str1, str2){
    return str1.toLowerCase().split('').sort() === str2.toLowerCase().split('').sort() || false;
}
//Still returns false when it should be true
//I need to join them back together before comparing them so I'm comparing strings, not arrays, you can't compare arrays with ===



//6th Iteration
function detectAnagram(str1, str2){
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('') || false;
}
//Success! There is probably a less WET solution for this, we'll see what the other Codewars users came up with and learn from them :)
//Updated to Codewars parameters:
    var isAnagram = function(test, original){
        return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('') || false;
    }
    //Passed Codewars tests





//TOP SOLUTIONS FROM CODEWARS USERS:

// same logic as my solution, different format
var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
};


//same as my solution
function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}


//created a string prototype to sort the letters and then used that in their function
//definitely a cleaner answer, splitting up the functions of sorting the letters and comparing the strings into two different functions
String.prototype.sortLetters = function() {
    return this.toLowerCase().split('').sort().join('');
}
  
var isAnagram = function(test, original) {
  return test.sortLetters() == original.sortLetters();
};




//same idea as answer above, but used two functions instead of a string prototype and a function
function isAnagram(str1, str2){
    return sortWord(str1) == sortWord(str2);
}

function sortWord(word){
    return word.toLowerCase().split("").sort().join("");
}












