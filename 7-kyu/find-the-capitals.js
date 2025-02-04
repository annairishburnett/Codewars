//CODEWARS CODING CHALLENGE DESCRIPTION:


// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//R: returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//E: "CodEWaRs" --> [0,3,4,6]
//E: None given
//P: Psuedo code -> see comments in solution
        //#1 create a function that takes in a string
        //#2 filter for only uppercase letters and their indices
        //#3 replace letter with its index
        //#4 should already be in an ordered list
        //#5 return array


//1st Iteration
function indicesOfCapitals(str){
    //compare each character to that character capitalized, if equal convert to its index, otherwise return empty string (don't think this end part is correct - end up with undefined spaces in the array???)
    return str.filter((char, index) => char === char.toUpperCase() ? char === index : '');
}
//Forgot .split() before .filter()


//2nd Iteration
function indicesOfCapitals(str){
    return str.split('').filter((char, index) => char === char.toUpperCase() ? char === index : '');
}
//Returned an empty array
//Ahh, char === index is wrong, that's comparison not replacement
//Try with .replace()


//3rd Iteration
function indicesOfCapitals(str){
    return str.split('').filter((char, index) => char === char.toUpperCase() ? char.replace(/./g, index) : '');
}
//Returned: ['C', 'E', 'W', 'R']
//Uppercase characters have been isolated, but not replaced with their indices
//Ahh, what if I just write the index there instead, I don't need the .replace() just like I don't for the '' option at the end, forgot that this is a ternary operator 


//4th Iteration
function indicesOfCapitals(str){
    return str.split('').filter((char, index) => char === char.toUpperCase() ? index : '');
}
//Returned: ['E', 'W', 'R']
//Index 0 was seen as false and therefore didn't return the 'C' at the zeroeth index?
//Look up .replace() on MDN
//.replace() is a string method, maybe not working on string character within an array? It seems like it should, though, the characters are still strings
//So, thinking back on filtering, that's probably not going to work because the indices will be [0,1,2,3,4] not their original indices
        function indicesOfCapitals(str){
            return str.split('').filter((char, index) => char === char.toUpperCase());
        }
        //Returns: ['C', 'E', 'W', 'R']
        //Need to try something other than filter? 
        //What about .findIndexOf(item => item === item.toUpperCase()) or something like that?


//5th Iteraton
//Decided to try splitting string into an array and looping through it, pushing index to a new result array and then returning that array
//Start with the basics, then refactor rather than getting fancy from the beginning
function indicesOfCapitals(str){
    let arr = str.split('');
    let result = [];

    arr.forEach((char, index) => {
        if(char === char.toUpperCase()){
            result.push(index)
        }
    })
    return result;
}
//It works!
//Okay, how can I refactor it to make it less WET?
        function indicesOfCapitals(str){
            return str.split('').map((char, index) => {
                if(char === char.toUpperCase()){
                    return index
                }
            })
        }
        //Returned: [0, undefined, undefined, 3, 4, undefined, 6, undefined]
        //Add an else{ return ''}
        //Nope, just adds empty strings
        //Could do the for loop with decrementing i--???
        //What about .indexOf() with all uppercase letters?
        //Google how to select all uppercase letters with replace
            // /[A-Z]g/    ???

//6th Iteration
function indicesOfCapitals(str){
    return str.split('').map((char, index) => char.replace(/[A-Z]/g, index));
}
//Returned: ['0', 'o', 'd', '3', '4', 'a', '6', 's']
//So /[A-Z]g/ worked, but maybe don't turn it into an array at all at first and replace lowercase letters with '' then convert to an array
    //Forgot that that doesn't work because you need the index:
    function indicesOfCapitals(str){
        return str.replace(/[A-Z]/g, index);
    }
    //Returned: Uncaught ReferenceError: index is not defined at indicesOfCapitals 

//7th Iteraton
function indicesOfCapitals(str){
    return str.split('').map((char, index) => char.replace(/[A-Z]/g, index) || str.delete(/[a-z]/g));
}
//Didn't work, still returned: ['0', 'o', 'd', '3', '4', 'a', '6', 's']
//Alright, test my answer that did work and see how others solved this



function indicesOfCapitals(str){
    let arr = str.split('');
    let result = [];

    arr.forEach((char, index) => {
        if(char === char.toUpperCase()){
            result.push(index)
        }
    })
    return result;
}
//Passed codewars tests!
//Well, there wasn't some super simple way to do this that I was missing






//TOP SOLUTIONS FROM CODEWARS USERS:

//Don't understand how this works
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};



//Don't understand how this works, either
var capitals = function (word) {
	return word.split('')
             .map(function(l, i) { if (l.toUpperCase() === l) return i; })
             .filter(function(i) { return i != null })
};



//Similar to first answers with reduce and a function with 3 params
var capitals = function (word) {
    return word.split('').reduce(function(n, l, i){
      return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
  };




  const capitals = word =>
    [...word].reduce((pre, val, idx) => /[A-Z]/.test(val)? [...pre, idx] : pre, []);



  var capitals = function (word) {
    return word.split('').reduce(function(result, c, i) {
      if (c.toUpperCase() === c) result.push(i);
      return result;
    }, []);
  };