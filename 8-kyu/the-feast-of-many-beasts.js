//CODEWARS CODING CHALLENGE DESCRIPTION:


// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.







//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast. There is just one rule: the dish must start and end with the same letters as the animal's name. Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
//R: returns true or false
//E: the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//P: Psuedo code -> see comments in solution


//1st Iteration
function feast(beast, dish) {
    const beastStart = beast.charAt(0);
    const beastEnd = beast.charAt(beast.length - 1);
    const dishStart = dish.charAt(0);
    const dishEnd = dish.charAt(dish.length - 1);
    
    if (beastStart === dishStart && beastEnd === dishEnd) {
      return true;
    } else {
      return false;
    }
}

//2nd Iteration
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}


function feast(beast, dish) {
    return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}


function feast(beast, dish) {
    return beast.at(0) == dish.at(0) && beast.at(-1) == dish.at(-1)
}


function feast(beast, dish) {
    return beast.first() + beast.last() == dish.first() + dish.last();
  }
  
  String.prototype.first = function() {
    return this[0];
  }
  
  String.prototype.last = function() {
    return this[this.length-1];
}


