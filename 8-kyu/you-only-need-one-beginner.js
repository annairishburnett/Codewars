//CODEWARS CODING CHALLENGE DESCRIPTION:

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P:
//R: Return true if the array contains the value, false if not.
//E:
//P: Psuedo code -> see comments in solution








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
