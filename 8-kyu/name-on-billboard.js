//CODEWARS CODING CHALLENGE DESCRIPTION:

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input will be a string that will have lowercase and uppercase letters and potentially spaces and hyphens. There will be no numbers or empty strings or other funny business.
//R: Return the cost for a billboard add of your name, in British pounds. Each character costs 30 pounds. 
//E: If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).
//E: You can not use multiplier "*" operator.
//P: see steps below

//Steps:
//1 - create a function that takes in a string
//2 - create a variable name "cost" by using let and set value equal to 0
//3 - convert the string to an array using .split('') and assign it to a variable named arr
//4 - use forEach, for of, or for loop to loop through each element in the array
//5 - each time add 30 pounds to variable cost with cost += 30
//6 - return the variable cost with template string so you can add the pound symbol
//7 - call the function and console.log the result


//1st SOLUTION ITERATION:

const myName = "Hermione Granger";

function billboardCost(str){
    let cost = 0;

    let arr = str.split('');

    for(let character of str){
        cost += 30;
    };

    return `£${cost}`;
}

console.log(billboardCost(myName));
//Success! At least in VSCode, still need to check if it satisfies Codewars requirements


//TOP SOLUTIONS FROM CODEWARS USERS:

















