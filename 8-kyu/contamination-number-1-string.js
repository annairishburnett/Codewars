//CODEWARS CODING CHALLENGE DESCRIPTION:

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example:
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input will be a string of text and a character, which will be a string of one character or an empty string. 
//R: Return the text string entirely converted to the input character, or an empty string if the text or the character are empty.
//E: text before = "abc"
    // character   = "z"
    // text after  = "zzz"
//E: If the text or the character are empty, return an empty string.
//P: see steps below

//PSEUDO CODE:
//1 - create a function that takes in a string and a character
//2 - use str.replaceAll('') method or .replace(/./g, '') to replace all of the characters in the text with the character given
//3 - use || '' to return an empty string
//4 - return that value, call the function, pass in the arguments, and console.log the results

//1st SOLUTION ITERATION:

function contamination(text, char){
    return text.replace(/([^])/g, char) || "";
}

console.log(contamination("abc", "z")) //"zzz"
//Works with VSCode, now to check if it satisfies codewars
//Success! But also I don't need the || ""

//2nd SOLUTION ITERATION:

function contamination(text, char){
    return text.replace(/([^])/g, char);
}



//TOP SOLUTIONS FROM CODEWARS USERS:

















