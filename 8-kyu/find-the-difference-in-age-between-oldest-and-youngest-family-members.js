//CODEWARS CODING CHALLENGE DESCRIPTION:

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so  a baby of 5 months, will have an ascribed ‘age’ of 0.
//R: Return a new array with [youngest age, oldest age, difference between the youngest and oldest age]
//E: [82, 15, 6, 38, 35] => [6, 82, 76]
//   [57, 99, 14, 32] => [14, 99, 85]
//P: Psuedo code -> see comments in solution


//FIRST ITERATION
let familyAges = [82, 15, 6, 38, 35];

function differenceInAges(ages){
    let result = [];

    result.push(Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)); //Push the min age, max age, and difference between min and max into our array "results"

    return result;
}


//SECOND ITERATION

// let familyAges = [82, 15, 6, 38, 35];

// function differenceInAges(ages){
//     // return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
//     //Doesn't work

//     // return Array.from(Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages));
//     //Doesn't work
// }

// console.log(differenceInAges(familyAges)); //[6, 82, 76]








//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function differenceInAges(ages) {
    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}

function differenceInAges(ages){
    const min = Math.min(...ages);
    const max = Math.max(...ages);
    
    return [min, max, max-min];
}

function differenceInAges(ages){
    return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
} //I thought I tried this solution and it didn't work, so I reverted back to my answer above. Not sure why it didn't work.



//EXPLANATION FOR CODE ABOVE:

//All solutions use Math.max and Math.min and the rest parameter ... to spread the array of ages into them, then return the array of results in slightly different configurations. 