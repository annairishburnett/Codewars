//CODEWARS CODING CHALLENGE DESCRIPTION:


// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// words = ['hello', 'world', 'this', 'is', 'great']
// smash(words) # returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.
// What We're Testing
// We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

// Disclaimer
// This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//R: A string with spaces in between words but not at the beginning or end of the string.
//E: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//P: Psuedo code -> see comments in solution


function sentenceSmash(array){
    let sentence = '';//create a sentence

    array.forEach((word, index) => {
        sentence += word;//loop through the array of words and add each word to the sentence

        if(index < array.length - 1){
            sentence += ' ';//after each element with an index that is NOT the last index, add a space
        }else if(index === array.length - 1){
            sentence += '.';//add a period at the end of the sentence (just for fun)
        }
    })

    return sentence;
}





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


smash = function (words) {
    return words.join(" ");
};


const smash = words => words.join(' ');


function smash (words) {
    return words.join(" ");
};


//EXPLANATION FOR CODE ABOVE:

//The solutions above used the .join() method in a variety of configurations (function, arrow function, etc.)