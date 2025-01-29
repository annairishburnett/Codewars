//CODEWARS CODING CHALLENGE DESCRIPTION:

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Your task is to write a function maskify, which changes all but the last four characters into '#'.
//R: return a string with all but the last four characters converted to #
//E: "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"
//E: "1" --> "1"
// "" --> ""
//P: Psuedo code -> see comments in solution
        //#1 - create a function that takes in a string
        //#2 - select every character but the last four
        //#3 - replace all but the last 4 characters with #


//1st Iteration
function maskify(str){
    return str.split('').map((char, index) => index < index - 4 ? char.replace(/./g, '#') : char).join('');
}
//Does nothing: index - 4 is not selecting any elements in the array


//2nd Iteration
function maskify(str){
    const lengthToChange = str.length - 4;
    return str.split('').map((char, index) => index < (lengthToChange) ? char.replace(/./g, '#') : char).join('');
}
//It works! But can be refactored by removing the const lengthToChange and replacing lengthToChange in the return with str.length - 4


//3rd Iteration
function maskify(str){
    return str.split('').map((char, index) => index < (str.length - 4) ? char.replace(/./g, '#') : char).join('');
    //split string into an array
    //use map and a ternary operator to select each element with an index that is less than the last 4 indexes and replace them with #, otherwise use the original character
    //then use join to turn the array back into a string
}





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


//Ahh, yeah, slice makes more sense hehe
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}



function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
}



function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
}


function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}


maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);



function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}





