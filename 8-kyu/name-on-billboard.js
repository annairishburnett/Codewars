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

// const myName = "Hermione Granger";

function billboardCost(name){
    let cost = 0;

    let arr = name.split('');

    for(let character of name){
        cost += 30;
    };

    return `£${cost}`;
}

console.log(billboardCost(myName));//£480
//Success! At least in VSCode, still need to check if it satisfies Codewars requirements


//Forgot to include the second parameter for price. 

//2nd SOLUTION ITERATION


const myName = "Hermione Granger";

function billboard(name, price = 30){
    let cost = 0;

    let arr = name.split('');

    for(let character of name){
        cost += price;
    };

    return `£${cost}`;
}

console.log(billboard(myName, 40)); //£640
//Failed - Codewars didn't want the pound symbol attached

//3rd SOLUTION ITERATION
function billboard(name, price = 30){
    let cost = 0;

    let arr = name.split('');

    for(let character of name){
        cost += price;
    };

    return cost;
}
//SUCCESS! 



//TOP SOLUTIONS FROM CODEWARS USERS:

//They used var instead of let and a for loop instead of a for of loop, otherwise the solution is the same
function billboard(name, price = 30){

var totalCost = 0;
for(i=0; i<name.length; i++){
    totalCost += price;
} 

return totalCost;

}



//They used the reduce method instead of creating a totalCost variable and using a for or for of loop
function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0); 
}



//They used an arrow function, the unary plus operator to convert a string into a number, and division. 
const billboard = (name, price = 30) => +(name.length / (1 / price))

// I don't understand the division part, so I'll have to look it up:

        // Step 3: (1 / price)

        // This calculates the reciprocal of the price.
        // If price = 30, then 1 / 30 ≈ 0.0333.

        // Step 4: Division name.length / (1 / price)

        // This is the tricky part.

        // Dividing by (1 / price) is the same as multiplying by price.

        // So effectively:

        // name.length / (1 / price) === name.length * price

//Still confusing... And I am a programmer, not a mathematician, so that is okay :) 



