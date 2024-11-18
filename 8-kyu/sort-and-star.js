//CODEWARS CODING CHALLENGE DESCRIPTION:


// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value. The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array.
//R: must be a string, and have "***" between each of its letters
//E: None given
//E: None given
//P: Psuedo code -> see comments in solution



function twoSort(s) {
    let sorted = s.sort(); 
    let word = sorted[0]; 
    let starStr = word.split('').map((char, index, array) => index < array.length -1 ? `${char}***` : char).join('');
  
    return starStr;
}
//Way too complicated, see versions below for DRYER solutions



//TOP SOLUTIONS FROM CODEWARS USERS:

function twoSort(s) {
    return s.sort()[0].split('').join('***');
}



twoSort = s => s.sort()[0].split('').join('***')



function twoSort(s) {
    s.sort();
    return s[0].split('').join('***');
}


const twoSort = s => [...s.sort()[0]].join('***');
















