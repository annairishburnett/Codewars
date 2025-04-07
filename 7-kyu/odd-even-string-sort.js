//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

// Examples
// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357
// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".

// Notes
// Tested strings are at least 8 characters long.





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: a string s that will contain at least 8 characters, all letters, no nums or symbols or funny business
//R: return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
//E: input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357
//E: no edge cases given
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - create two conts, even and odd, and set them equal to s.split('') to create an array, then .reduce(), the first reducing for only even characters and the second for only odd characters
        //use if conditional, if index % 2 === 0, then add character to the result
// 3 - add .join('') at then end of .reduce to turn the array back into a string
// 4 - return with tick marks ${even} with a space then ${odd}, which will give us a string of the sorted characters with a space in the middle
// 5 - call the function

//1ST ITERATION
let string = "CodeWars";

function sortMyString(s){
        const evens = s.split('').reduce((result, char, index) => {
                if(index % 2 === 0) result.push(char);
                return result;
        },[]).join('');

        const odds = s.split('').reduce((result, char, index) => {
                if(index % 2 !== 0) result.push(char);
                return result;
        },[]).join('');

        return `${evens} ${odds}`;
}

console.log(sortMyString(string));
//First try!!! Worked in VSCode, now to check in Codewars.
//Worked in Codewars, too!






//TOP SOLUTIONS FROM CODEWARS USERS:


















