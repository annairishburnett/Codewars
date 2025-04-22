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
let string = "aabBcde";

function countDuplicates(str){
        let uniqueChars = [...new Set(str.toLowerCase().split(''))];

        return `${uniqueChars.length} # `
        return uniqueChars;
        let characters = {...uniqueChars};

        return characters;

}

console.log(countDuplicates(string));// returned: "5 #" -> wanted: 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//What about using brackets to evaluate key at run time? 
//Or can you get the element out of the array and use that element to count instances in the other array and add that all to the return string at the same time?
//OOOHHH! We're looking for duplicates, not unique characters, got to start over with the pseudo code because you were trying to do the wrong thing (-: 


// 1 - create a function that takes in a string
// 2 - could use a loop and .includes to find duplicates, has to include the character

//2ND ITERATION
let string1 = "aabBcde";

function countDuplicates1(str){
        let result = '';
        let duplicates = [];

        str.split('').forEach((char, index, array) => {
                if(array.includes(char)){
                        duplicates.push(char)
                }
        })

        return duplicates;

}

console.log(countDuplicates1(string1));// 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//Nope, that will always produce the same string as the starting string because of course the string includes all of the characters that are in it, doesn't check for two instances of those characters
        //Maybe do need to do 
        //Just ask for help, hey, you've spent a lot of time on this one, it's okay, you know you've put in effort :) 



//Got help from ChatGPT, here's a new starting point:


//3RD ITERATION
let string = "aabBcde";

function duplicateCount(text) {
        const lower = text.toLowerCase();
        const charCount = {};
      
        for (let char of lower) {
          charCount[char] = (charCount[char] || 0) + 1;
        }
      
        let duplicates = 0;
        for (let char in charCount) {
          if (charCount[char] > 1) {
            duplicates++;
          }
        }
      
        return duplicates;
}

console.log(duplicateCount(string));// 2 
//Success on Codewars - okay, so I was thinking the return had to include that whole sentence, not just the number, so I was way overthinking/over complicating it





//TOP SOLUTIONS FROM CODEWARS USERS:


//Oofff, complcated regex I don't understand. Will have to look up how that one works. 
    //Okay, not so complicated:

    // .match(/([^])\1+/g)
    // Uses a regular expression to find repeated characters:
        // ([^]): Captures any character (using [^] to match any character safely).
        // \1+: Looks for one or more repetitions of the same character captured.
    
    // So this matches groups like:
    // "aa"
    // "bbb"
    // "11"
    // etc.
    
    // || []
    // If .match(...) returns null (meaning no duplicates found), this falls back to an empty array so we can safely check .length.

    //Using ([^]) instead of (/./) ensures that literally every character is considered, even newline characters.

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}





//This one is more straightforward:
    // text.toLowerCase()
            // Converts the input string to all lowercase so comparisons are case-insensitive.

    // .split('')
            // Turns the string into an array of characters.

    // .filter(function(val, i, arr) { ... })
            // Loops through each character, checking a condition.
                    // Inside the filter:
                    // javascript
                    // Copy
                    // Edit
                    // arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
                    // This line ensures:

                    // arr.indexOf(val) !== i: This checks if this is not the first occurrence of the character → means it’s a duplicate.

                    // arr.lastIndexOf(val) === i: This checks if this is the last occurrence of the character → ensures we count the duplicate only once.

    // So you're only keeping characters that:
            // Appear more than once
            // And you're only keeping their last occurrence

function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}






function duplicateCount(text){
    var lower = text.toLowerCase();
    var count = 0;
    var used = [];
    
    lower.split('').forEach(function(letter) {
      if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
        count++;
        used.push(letter);
      }
    });
    
    return count;
}











