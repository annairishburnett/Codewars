//CODEWARS CODING CHALLENGE DESCRIPTION:

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Write a function that returns a string in which firstname is swapped with last name.
//R: returns a string in which firstname is swapped with last name.
//E: "john McClane" --> "McClane john"
//E: None given
//P: Psuedo code -> see comments in solution



//create a function that takes in a string
const nameShuffler = str => str.split(' ').reverse().join(' ');//turn string into an array so you can reverse it, reverse it, join it back together with a space in between





//TOP SOLUTIONS FROM CODEWARS USERS:

//same as mine, just not an arrow function
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}

//same as mine
const nameShuffler = str => str.split(' ').reverse().join(' ');

















