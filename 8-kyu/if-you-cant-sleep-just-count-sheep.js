//CODEWARS CODING CHALLENGE DESCRIPTION:


// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
//R: return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
//E: 3 --> "1 sheep...2 sheep...3 sheep..."
//P: Psuedo code -> see comments in solution


//create a function that takes in an integer
const countSheep = function (num){
    let string = '';//create an empty string variable
    
    //create a loop that runs "num" times
    for(let i = 1; i <= num; i++) {
      string += `${i} sheep...`;  //add "number sheep..." to empty string each time the loop runs
    }
    
    return string;//return string
}





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
}

const countSheep = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
      val += `${i} sheep...`;
    }
    return val;
}

countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

const countSheep = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('')



