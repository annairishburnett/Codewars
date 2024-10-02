//CODEWARS CODING CHALLENGE DESCRIPTION:


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function which answers the question "Are you playing banjo?". The function takes a name as its only argument. Names given are always valid strings.
//R: one of the following strings:
    // name + " plays banjo" 
    // name + " does not play banjo"
//E: "Rudolfo" --> "Rudolfo plays bajo"
//P: Psuedo code -> see comments in solution


//First iteration
//create a function that takes in a name as a single parameter, split it into an array, if the first element of the array in it's lowercase form is equal to r, return "Name plays banjo", otherwise "Name does not play banjo"
function areYouPlayingBanjo(name) {
    const array = name.split('');
    if(array[0].toLowerCase() === 'r'){
       return `${name} plays banjo`
    }
    else return `${name} does not play banjo`
}

//See solutions below for drier code



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
      return name + ' plays banjo';
    } else {
      return name + ' does not play banjo';
    }
}

function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0] == 'R' || name[0] == 'r')
      return name + " plays banjo";
    else
      return name + " does not play banjo";
}

function areYouPlayingBanjo(name) {
    return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
}


