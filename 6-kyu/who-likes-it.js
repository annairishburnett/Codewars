//CODEWARS CODING CHALLENGE DESCRIPTION:

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input is an array containing the names of people that like an item, there can be an empty array, but no numbers, symbols, or funy business
//R: return is a sentence with the names then "... likes this", if there are two names put an and between them, if there are three names use a comma between 1 and 2 and then an and before 3, if there are four or more "Name, name and # others like this"
//E: []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//E: For 4 or more names, the number in "and 2 others" simply increases.
//P: Psuedo code -> see comments in solution


// 1 - create a function that takes in an array
// 2 - create a variable for the sentence that will be returned and set it equal to an empty string, let sentence = ""
// 3 - or we could use .reduce and set it's starting value to an empty string
// 4 - so, we'd do array.reduce((sentence,name)), then within that we'd use if/else statements and comparison with array.length to get the correct sentence formation
// 5 - for example, if(array.length === 1){sentence += `${name} likes this`}
// 6 - return the value and call the function




//TOP SOLUTIONS FROM CODEWARS USERS:


















