//CODEWARS CODING CHALLENGE DESCRIPTION:


// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: A string of numbers and letters mixed up. Any empty strings? Any strings with no numbers in them? Any other funny business? No
//R: return all the numbers in that string in the order they occur
//E: "He11o th3r3 y0u!" -> 11330
//E: No edge cases were given.
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - use .match(/[0123456789]/g) to find all of the numbers 
        //not sure if that will work...
// 3 - return the result and call the function


//1ST ITERATION

const string = "He11o th3r3 y0u!";

function returnNums(str){
    return str.match(/[0123456789]/g);
}

console.log(returnNums(string));
//returns an array of the numbers: ['1', '1', '3', '3', '0']
//directions don't say if the return should be an array or a string, but seems like maybe the implication is in string form
//so add .join('') to the end to get a string and try it on Codewars


//2ND ITERATION

function filterString(value){
    return value.match(/[0123456789]/g).join('');
}
//Got an error code on Codewars: For the input "123": expected '123' to equal 123
//Is the problem that I'm returning a string of numbers instead of a number?
    //Added .map(Number) before .join('') and that didn't help
    //Check what type of variable I'm creating with my function above:

        function filterString(value){
            const result = value.match(/[0123456789]/g).map(Number).join('');
        
            console.log(typeof result);
            return result;
        }
        //It's a string before I add .map(Number) as expected, and still a string after I add .map(Number)
        //Because .join('') turns it back into a string, it doesn't just combine the numbers into one number
            //I could wrap the whole thing in Number() 

            function filterString(value){
                const result = Number(value.match(/[0123456789]/g).join(''));
            
                console.log(typeof result);
                return result;
            }
            //That worked! Try it again on Codewars 
            //Success!

            
//FINAL SUBMITTED SOLUTION:
function filterString(value){
    return Number(value.match(/[0123456789]/g).join(''));
}



//TOP SOLUTIONS FROM CODEWARS USERS:


//I don't understand how this works, specifically the /\D/ regex
var filterString = function(value) {
    return +value.replace(/\D/g, '')
}


//Similar concept to mine except they used .filter instead of .match
const filterString = (v) => +[...v].filter(el => '0123456789'.includes(el)).join('')


//this one uses string concatenation with a loop to add nums to a new variable, then converts the resulting string into a number 
var filterString = function(value) {
    let result = '';
    for (let i of value){
      if (!isNaN(Number(i))) result += i;
    }
    return Number(result);
}


//turns the string into an array with square brackets and the spreading, then .filter to sort out isNaN characters, then .join surrounded by Number() like I did
const filterString = value => Number([...value].filter(char => !isNaN(char)).join(""));









