//CODEWARS CODING CHALLENGE DESCRIPTION:

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input will be a number, an integer or floated value
//R: return must be that number preceded by a dollar sign and a number with exactly two decimal places
//E: 3 needs to become $3.00
// 3.1 needs to become $3.10
//E: add trailing zeros if they are missing, but no need to worry about any dangling periods
//P: see steps below

//1 - create a function that takes in a number
//2 - convert to a string to to check if it includes a period using .toString and .includes
//3 - if it doesn't have a period, then we know it's just dollars and no cents, so we can add a period and 00 at the end using a template literal
//4 - if it does have a period, then we can check the length of the string to see if it's equal to three (3.3), if it is then we only add one zero using the template literal
//  - return the value, call the function, pass in an argument, and console.log the result


//1st ITERATION
let input = 3.3;

function dollarCents(num){
    if(!num.toString().includes('.')){
        return `$${num}.00`;
    }else if(num.toString().length === 3){
        return `$${num}0`;
    }else{
        return `$${num}`
    }
}

console.log(dollarCents(input));
//Works for numbers as long as the dollar amount is single digits (so 30.3 wouldn't work because it's three digits long and then you'd only add 0 zero on the end and that's not formatted correctly)
//I need to rethink this...
        //need to turn it into an array and split it at the period, assign it to a variable const arr = num.toString().split('.')
        //then if arr.length === 1, use template string to convert to format of $00.00 with dollar sign and adding the period (use ternary operator for if/else)
        //else, use template string to convert add the dollar sign (already has the period), but then there's the issue of how many digits are after the decimal, 1 or 2?
        //could just do .padEnd and add 2 zeros and then use .trim(2) to limit to 2 decimals on the end 


//2nd ITERATION
function dollarCents(num){
    const arr = num.toString().split('.');

    return arr.length === 1 ? `$${arr}.00` : `$${arr.join('')}00`.trim(2);
}
//still need to add the period because when you split the string using the period it deletes it

//3rd ITERATION
function dollarCents(num){
    const arr = num.toString().split('.');

    return arr.length === 1 ? `$${arr}.00` : `$${arr.join('.')}00`.trim(2);
}
//using .trim(2) at the end of a template literal doesn't work
//try creating a Number() and then triming and and then converting it to a string
//no, create an array and a split array as consts
//it's not trim I want, it's .toFixed(2), oops! (facepalm)

//4th ITERATION
function dollarCents(num){
    const arr = num.toString().split('.');

    return arr.length === 1 ? `$${arr}.00` : num.toString().padEnd(2,0).toFixed(2);
}



//TOP SOLUTIONS FROM CODEWARS USERS:



