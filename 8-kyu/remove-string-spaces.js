//CODEWARS CODING CHALLENGE DESCRIPTION:

// Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: A single string with spaces in it
//R: the input string minus spaces
//E: "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"
//P: Psuedo code -> see comments in solution



//pass in a string, split at the spaces, then join the array back into a string with no spaces
const noSpace = x => x.split(" ").join("");



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:


function noSpace(x){
    return x.replace(/\s/g, '');
}

function noSpace(x){return x.split(' ').join('')}

function noSpace(x) {
    return x.replaceAll(' ', '');
}

const noSpace = x => x.replace(/ /g, "");


function noSpace(x){
    var result = ""
    for(var index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
}