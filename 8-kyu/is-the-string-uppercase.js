//CODEWARS CODING CHALLENGE DESCRIPTION:

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Create a method to see whether the string is ALL CAPS.
//R: true or false
//E: "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
//E: In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
//P: Psuedo code -> see comments in solution


//create a prototype method
String.prototype.isUpperCase = function() {
    return this.valueOf() === this.toUpperCase();//check if the string is equal to the string in all caps
}




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }


String.prototype.isUpperCase=function() {return this==this.toUpperCase()}


String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
};


//define the string prototype here
String.prototype.isUpperCase = function() {
    return this.toUpperCase() == this;
}





















