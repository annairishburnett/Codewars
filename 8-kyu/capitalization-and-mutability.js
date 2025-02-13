//CODEWARS CODING CHALLENGE DESCRIPTION:


// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Fix the helper function so that it makes the first character in the string upper case. The string will always start with a letter and will never be empty.
//R: return a string with the first letter capitalized
//E: "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"
//E: "Hello" --> "Hello" (the first letter was already capitalized)
//P: Psuedo code -> see comments in solution


//create a function that takes in a string
const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);//select first character in the string and convert to uppercase, add second half of string with concatenation



//TOP SOLUTIONS FROM CODEWARS USERS:


function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}


const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());



const capitalizeWord = word => word[0].toUpperCase()+word.slice(1);



function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}












