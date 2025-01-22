//CODEWARS CODING CHALLENGE DESCRIPTION:


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples:
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: you are given a string of space separated numbers, and have to return the highest and lowest number.
//R: highest and lowest number in string format
//E: highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
//P: Psuedo code -> see comments in solution


let string = "1 2 3 4 5";

//First iteration === failed
function highestAndLowest(str){
    return str.split(' ').filter(num => num === Math.max(...arr) || num === Math.min(...arr)).sort((a,b) => b - a).join(' ');
}



//Second iteration === failed (worked on browser, didn't pass Codewars tests)
function highAndLow(numbers){
    const arr = numbers.split(' ');

    return `${Math.max(...arr)}  ${Math.min(...arr)}`;
    
}



//Third iteration === failure
function highAndLow(numbers){
    const arr = numbers.split(' ');
    let result = '';

    result += `${Math.max(...arr)}  ${Math.min(...arr)}`;

    return result;
}


//Fourth iteration === still didn't work
function highAndLow(numbers){
    const arr = numbers.split(' ').map(Number);

    return `${Math.max(...arr)}  ${Math.min(...arr)}`;
    
}


//Fifth iteration === still didn't work
function highAndLow(numbers){
    const arr = numbers.split(' ').map(Number);

    let result = `${Math.max(...arr)}  ${Math.min(...arr)}`;

    return result;
    
}


//6th iteration === I had 2 spaces between ${Math.max(...arr)} AND ${Math.min(...arr)}, otherwise my earlier code was good :-|
//Prompt I gave ChatGPT to help me figure out what was going on: "Please use the Socratic Method to help me figure out why my function doesn't meet the Codewars testing criteria"

function highAndLow(numbers){
    const arr = numbers.split(' ').map(Number);

    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

//same as my solution
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//looked up .apply() in the MDN and didn't understand it :-| made a note to look into it later
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//same as my solution but using concatenation instead of template strings
function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
}


//similar to one of my earlier attempts 
function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
}

