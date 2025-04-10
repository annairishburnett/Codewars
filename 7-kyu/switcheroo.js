//CODEWARS CODING CHALLENGE DESCRIPTION:


// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input will be a string made up of letters a, b, and/or c - no numbers, no empty strings, no special characters or other funny business? No
//R: return will be the string of letters with the position of letters a and b switched (change a to b and vice versa). Leave any incidence of c untouched.
//E: 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'
//E: none given
//P: Psuedo code -> see comments in solution


// 1 - create a function that takes in a string
// 2 - what's happening is a is getting replaced with b and b is getting replaced with a
// 3 - use .replace(/a/gi, 'b'), then do it again with .replace(/b/gi, 'a')
            //this won't work because we'll end up with all a's and c's
// 4 - use .map and a ternary operator?
// 5 - .split('') to create an array
// 6 - .map(char => char === 'a' ? char.replace('b') : char.replace('a')) -> this should leave c alone
// 7 - use .join('') to turn it back into a string
// 8 - return the value and call the function


//1ST ITERATION
let string = 'aabacbaa';

function switcheroo(str){
        return str.split('').map(char => char === "a" ? char.replace("b") : char.replace("a")).join('');
}

console.log(switcheroo(string)); //should return "bbabcabb"
//return was "aabacbaa"
//.replace is for strings, so maybe we don't need char.replace(""), we can just used the letter "a"


//2ND ITERATION
function switcheroo(str){
        return str.split('').map(char => char === "a" ? "b" : "a").join('');
}
//returned: "bbabaabb", should be: "bbabcabb"
//because if it's not a, it replaces it with a and c is not a
//add an || char === "c" with another ternary operator or can we just use ||???


//3RD ITERATION
function switcheroo(str){
        return str.split('').map(char => char === "c" || (char === "a" ? "b" : "a")).join('');
}
//returned: "bbabtrueabb", should be: "bbabcabb"
//getting closer! :-) use ternary operator, not ||

//4TH ITERATION
function switcheroo(str){
        return str.split('').map(char => char === "c" ? "c" : (char === "a" ? "b" : "a")).join('');
}
//returned: "bbabcabb", should be: "bbabcabb"
//Success on VSCode! Now time to try it on Codewars
//It worked!


//FINAL SOLUTION
function switcheroo(x){
    return x.split('').map(char => char === "c" ? "c" : (char === "a" ? "b" : "a")).join('');
}



//TOP SOLUTIONS FROM CODEWARS USERS:

//So you can use .replace, but with a ternary operator as the value you're replacing the character with. So clever! :-)
const switcheroo = x => x.replace(/[ab]/g, x => x === "a" ? "b" : "a")



//They used .map with a function inside of it and if statements, with .join at the end to turn the array back into a string -> I bet you could use a similar method with .reduce
function switcheroo(x){
    return x.split('').map(function(e){
      if (e =='b')return 'a';
      if (e == 'a') return 'b';
      if(e=='c') return 'c'
    }).join('');
}


//Same concept as my answer, but with "a" as the initial letter instead of "c"
const switcheroo = x => x.split('').map(letter => letter === 'a' ? 'b' : (letter === 'b' ? 'a' : 'c')).join('');






