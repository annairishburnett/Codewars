//CODEWARS CODING CHALLENGE DESCRIPTION:

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input will be a string that contains only alphabetic characters (both uppercase and lowercase) and numeric digits. Any empty strings or other types of inputs? No
//R: return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string
//E: "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
//E: None given
//P: Psuedo code -> see comments in solution


// 1 - create a function that takes in a string
// 2 - convert the string to all lowercase characters with .toLowerCase()
        //Actually maybe don't do this because they want to know about lowercase and uppercase letters (see 3rd example)
// 3 - you could use new Set() to get the list of unique characters, then create variables for each and set them equal to 0, then loop through original string (converted to an array) and add each occurence to the total count for that character
// 4 - then use template literal to create sentence structure needed for the return
// 5 - could also do all of this inside of .reduce and set up the template literal as the starting value for the accumulator
        //Actually that might be difficult since we don't know what the structure will be until we break down the string
// 6 - will need to use if(...) return statements and template literals depending on the conditions
// 7 - return the value and call the function
// 8 - this one seems tricky - I feel like I'm missing something, maybe regex logic? We'll see! Just try your best!


//1ST ITERATION





//TOP SOLUTIONS FROM CODEWARS USERS:


















