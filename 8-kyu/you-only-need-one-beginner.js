//CODEWARS CODING CHALLENGE DESCRIPTION:

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. a can contain numbers or strings. x can be either.
//R: Return true if the array contains the value, false if not.
//E: No examples were given
//P: Psuedo code -> see comments in solution


function check(a, x) {
    // your code here
    let result = a.find((item) => item === x) //use .find to return x or undefined
    return result === x ? true : false //if x was found in the array, return true, else false
  }





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const check = (a,x) => a.includes(x);

function check(a,x){
    return a.includes(x);
};

function check(a,x){
    return a.indexOf(x) > -1 ? true : false;
};

function check(a,x){
    return a.indexOf(x) > -1;
};

const check = (a, x) =>
    a.some(val => val === x);


//Comments: 
//All the top answers used .includes() or .indexOf() instead of .find()