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





//TOP SOLUTIONS FROM CODEWARS USERS:

















