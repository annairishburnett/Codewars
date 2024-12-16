//CODEWARS CODING CHALLENGE DESCRIPTION:

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input is a number with a card suit. Will there be any inputs without card suits? No. Will there be numbers with more than one digit? Yes.
//R: Return the name of the card suit in the form of a string.
//E: ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
//E: None provided, so we will assume none until we submit the solution and see if we get any errors.
//P: see steps below

//Pseudo Code:

// 1 - create a function that takes in a string
// 2 - use if else statements and .includes('♣') then return 'clubs', or an object with key value pairs ♣ : 'clubs', or you could use switch cases
// 3 - do this for each suit
// 4 - return the suit name
// 5 - call the function, console.log the result

//1st SOLUTION ITERATION:

let card = "3♣";

function defineSuit(card){
    if(card.includes('♣')){
        return 'clubs';
    }else if(card.includes('♦')){
        return 'diamonds';
    }else if(card.includes('♥')){
        return 'hearts';
    }else if(card.includes('♠')){
        return 'spades';
    }else{
        return 'invalid input';
    }
}

console.log(defineSuit(card));
//It worked in VSCode, now checking Codewars. 
//Success! 
//Now try it with an object and key value pairs:


function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').map(char => {
    if(suits[char]){
        return suits[char];
    }
    return 'invalid input'
   })
}
//Returned: ['invalid input', 'clubs']
//Returning something for the 3, don't need to do that
//Returning answer in array format, which we don't want
//Try this:

function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').map(char => suits[char]);
}
//Returned: [undefined, 'clubs']
//Didn't solve the issue
//What about not splitting it into an array and doing .includes on the string with the suits?
function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.includes(suits[card]);
}
//I don't think this will work
//It did not, returned false
//What about filter or reduce?

function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').filter(char => suits[char]).join('');
}
//Getting closer, returned: '♣'
//Need a ternary operator

function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').filter(char => suits[char] ? suits[char] : 'invalid input').join('');
}
//Nope, returned: '3♣'
//I clearly still don't understand how to access values in objects :/ 
function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').filter(char => suits[char] ? suits['char'] : 'invalid input').join('');
}
//Returned: '3'
//I'm surrounding it! Every answer but the one I want ;)

function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').filter(char => suits[char] ? suits.char : 'invalid input').join('');
}
//Same as above, returned: '3'
//Time to go Google/ask for help :) 



function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').filter(char => suits[char]);
}
//Returns an array with the '♣' in it, so it couldn't look up it's value, I have to turn it back into a string

function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   return card.split('').filter(char => suits[char.toString()]);
}
//Didn't change anything

//So I started typing out my question and in the process had a realization:
//My return is an array with the clubs symbol in it, I just need to add .join('') to turn it into a string of the symbol, then I can pass the string into the object 'suits' with square brackets to return the value I want
//I just need to add an intermediary step with let result = then what I have above with card.split('') etc. 

function defineSuit(card){
   const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
   }

   let result = card.split('').filter(char => suits[char]).join('');

   return suits[result];
}
//Success! 
//Check it with Codewars
//It worked! Now to submit and see what other solutions people came up with :)




//TOP SOLUTIONS FROM CODEWARS USERS:

















