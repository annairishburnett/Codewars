//CODEWARS CODING CHALLENGE DESCRIPTION:

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.
//R: complementary dna to input in the form of a string
//E: "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
//E: none given
//P: Psuedo code -> see comments in solution


//1st Iteration
//create a function that takes in a string
let dnaString = "ATTGC";
function complementaryDNA(dna){
    return dna.replace(/A/gi, 'T').replace(/T/gi, 'A').replace(/C/gi, 'G').replace(/G/gi, 'C');
}
//Doesn't work, returns: AAACC
//The last two .replace() methods copy over the first two. Can you chain them within the parenthesis?


//2nd Iteration
//create a function that takes in a string
function dnaStrand(dna){
    const arr = dna.split('');//turn the string into an array
    let complement = [];//create an empty array you can push data into

    //loop through the array and switch each letter for its complement and push it into the new array
    for(let symbol of arr){
        if(symbol === 'A'){
            complement.push('T');
        }else if(symbol === 'T'){
            complement.push('A');
        }else if(symbol === 'C'){
            complement.push('G');
        }else if(symbol === 'G'){
            complement.push('C');
        }
    }
    return complement.join('');//convert the new array into a string and return it
}
//This solution works, but it's long and not very elegant. 





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
}
  
DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}




var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}




let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);



function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}



//using switch cases instead of conditional statements
function DNAStrand(dna){
    //your code here
    var res="";
    for(var i=0; i<dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
}












