//CODEWARS CODING CHALLENGE DESCRIPTION:

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input is a string of letters, with no spaces, no nums or special characters, or other funny business. See lists above for right side letters, left side letters, and victim letters. Right and left side letters have a specific "power" - see above. Get a total RS value and a total LS value and compare - whoever has the higher number wins. 
//R: If RS value is higher, return "Right side wins!", if LS value is higher, return "Left side wins!", if they tie, return "Let's fight again!"
//E: alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
//E: no edge cases given
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - create an object that contains the letters and their values as key value pairs
// 3 - within the function use .replace() to replace the letters with their values, referencing the object key value pairs
// 4 - then create RS const and LS const, set them equal to string converted into an array and use .match(/[]/) with a character set to get only the letters you want for each const
// 5 - then use reduce to get total
// 6 - then use if/else statement to compare RS and LS values to return "Right side wins!", "Left side wins!", or "Let's fight again!"







//TOP SOLUTIONS FROM CODEWARS USERS:


















