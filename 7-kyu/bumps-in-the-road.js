//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: a string that contains either "_" (flat road) OR "n" (bumps).
//R: If there are 15 bumps or less, return "Woohoo!", otherwise return "Car Dead"
//E: "nnn" -> "Woohoo!"
//"_ _ _ _ _" -> "Woohoo!"
//"n n n n n n n n n n n n n n n n n n n n" -> "Car Dead"
//E: none given -> doesn't say anything about empty strings, numbers, or any other funny business so we won't try to account for any of that
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - remove all spaces from the string using .replace(/ /g, ''), then check number of characters with .length
// 3 - but we also have to check if the character is "n" or "_", so we can use if else statement with === comparison
// 4 - but to do that we need to isolate one of the characters out of the string, so we need to convert it into an array, then select one of the elements with array[0] - should work since the strings will either contain "n" OR "_"
// 5 - if the string is "_", return "Woohoo!", if the string is "n" AND length of the string is 15 or more, return "Car Dead"
//call the function









//TOP SOLUTIONS FROM CODEWARS USERS:


















