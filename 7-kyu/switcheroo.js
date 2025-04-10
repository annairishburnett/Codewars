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




//TOP SOLUTIONS FROM CODEWARS USERS:


















