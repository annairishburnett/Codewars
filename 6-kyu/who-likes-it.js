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
        //using .reduce in this way returns something invisible, so go back to original plan
        //also got an invisible return when I used let sentence = "" and a forEach loop
        //checked with ChatGPT, a loop doesn't run if the array is empty, so move the first option arr.length === 0 outside of the loop, THEN do an else conditional with the arr.forEach
        //So the problem with .reduce wasn't the reduce, it was running .reduce on an empty array
        //Try it again with the arr.length === 0 outside of the arr.reduce
        //but it doesn't really make sense to use reduce to eliminate creating a variable when you need to create the variable for the arr.length === 0 option anyway, so use forEach
        //actually, we don't need the loop, we can just use if/else conditionals and the array elements with their indexes since we only have to go up to the 3rd element/name and then use math from there to get the "and # others like this"
        


//1ST ITERATION
let array = [];

function whoLikesThis1(arr) {
     return arr.reduce((sentence, name) => {
        if(arr.length === 0){
                sentence += "no one likes this";
                return sentence;
        }
     }, "");
}
console.log(whoLikesThis1(array));// returned something invisible



//2ND ITERATION
let array1 = [];

function whoLikesThis2(arr) {
     let sentence = "";
     
     arr.forEach((name, index) => {
         if(arr.index === 0){
                sentence += "no one likes this"
         }
     });
     
     return sentence;
}

console.log(whoLikesThis2(array1));// returned something invisible



//3rd ITERATION
let array2 = [];

function whoLikesThis3(arr) {
     let sentence = "";
     
     if(arr.length === 0) {
         sentence = "no one likes this";
     }else{
         arr.forEach((name, index) => {
             // Build the sentence based on # of names
             sentence += name + " likes this"; 
         });
     }
     
     return sentence;
}

console.log(whoLikesThis3(array2));// "no one likes this"


//4TH ITERATION
let array3 = ["Evi", "Lea", "Anna", "Laura"];

function likes(names) {
     let sentence = "";
     
     if(names.length === 0) {
        sentence = "no one likes this";
     }else if(names.length === 1){
        sentence = `${names[0]} likes this`;
     }else if(names.length === 2){
        sentence = `${names[0]} and ${names[1]} like this`;
     }else if(names.length === 3){
        sentence = `${names[0]}, ${names[1]} and ${names[2]} like this`;
     }else{
        sentence = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
     }
     
     return sentence;
}

console.log(likes(array3));// "Evi, Lea and 2 others like this"

//It works on VSCode! Try it out on Codewars
//It works! I think I panicked and checked what was wrong on ChatGPT because I thought a 6-kyu kata would be much harder/more complex, but the answer doesn't include anything new, or anything that tricky
//Stay calm and think through the simplest ways of doing things and you'll be fine :) 




//TOP SOLUTIONS FROM CODEWARS USERS:


//Used switch cases instead of if/else. Not sure why they have the names || [] here, if the array is empty it should be [] anyway??? 
        //names = names || []; means:
        //"If names is falsy (e.g., undefined, null, or false), then set it to an empty array []."
        //So it's basically a default fallback, ensuring that names is always a valid array before the function continues.

//Would prefer this solution with template strings, it's a bit cleaner with the spaces 
function likes(names){
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}



//Created an object with key value pairs and template strings. Then to select the key value pair they used Math.min which selects whichever number is smaller, 4 or names.length. This is a nice, clean option. 
function likes(names){
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}




//Interesting, and too WET/complicated
function likes (names) {
    var templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    
    return templates[idx].replace(/{name}|{n}/g, function (val) {
      return val === '{name}' ? names.shift() : names.length;
    });
}




//Basically the same as my solution, but with all if statements instead of if/else conditionals. I wonder why they did that?
        //Each if block uses a return, which immediately ends the function. Because of that, there's no need for else or else if — the function will never reach the next condition once it returns.
        //So it’s purely a style choice - if/else gets you the same results.  
function likes(names) {
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return names[0] + " likes this";
    if(names.length === 2) return names[0] + " and " + names[1] + " like this";
    if(names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}








