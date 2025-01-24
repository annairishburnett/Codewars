//CODEWARS CODING CHALLENGE DESCRIPTION:


// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: You'll have to capitalize each word, check out how contractions are expected to be in the example below.
//R: a string with every word capitalized
//E: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//E: Contractions: the letter after the contraction should not be capitalized
//P: Psuedo code -> see comments in solution


//1st Iteration
let string = "How can mirrors be real if our eyes aren't real";

//create a function that takes in a string
function jadenCase(str){
    //split the string at the spaces, loop through the word and capitalize the first character in each word, then join back into a sentence with spaces
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
//This worked in VS Code



//2nd Iteration - Codewars wanted it to be a String.prototype:
String.prototype.toJadenCase = function () {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};
//Success!





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}


//The same as my answer
String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};


//Not sure how this one works, should look it up later
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};


//More complicated than necessary putting a function inside of a function
String.prototype.toJadenCase = function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return this.split(' ').map(capitalizeFirstLetter).join(' ');
};
