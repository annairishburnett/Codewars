//CODEWARS CODING CHALLENGE DESCRIPTION:

// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Write a function called sortGiftCode that accepts a string containing up to 26 unique alphabetical characters - no nums, no special characters, no funny business? Nope!
//R: returns a string containing the same characters in alphabetical order
//E: "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
//E: none given - but it says "up to 26 characters" so I should include validation that prevents accepting strings longer than 26 letters
//P: Psuedo code -> see comments in solution

//create a function that takes in a string
//make sure str isn't longer than 26 characters by using ternary operator and str.length < 27
//if true, use .sort() to put in alphabetical order
//if false, return 'invalid code'
//return value, call function, pass in an argument

//1st Iteration
function sortGiftCode(code){
    return code.length < 27 ? code.sort() : 'invalid code';
}
//Error message: Uncaught TypeError: code.sort is not a function at sortGiftCode
//Right - forgot to convert string into an array before using .sort(), then convert back into a string using .join('')


//2nd Iteration:
let code = "zyxwvutsrqponmlkjihgfedcba";

function sortGiftCode(code){
    return code.length < 27 ? code.split('').sort().join('') : 'invalid code';
}

console.log(sortGiftCode(code)); //"abcdefghijklmnopqrstuvwxyz"
//Success!




//TOP SOLUTIONS FROM CODEWARS USERS:


















