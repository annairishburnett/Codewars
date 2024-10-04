//CODEWARS CODING CHALLENGE DESCRIPTION:

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Create a function which translates a given DNA string into RNA. The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
//R: a string of uppercase letters, only the characters 'G', 'C', 'A', and 'U'. 
//E: "GCAT"  =>  "GCAU"
//P: Psuedo code -> see comments in solution


//create a function that takes in one parameter, dna, then convert all T's to U's and return the result
function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
}



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}

const DNAtoRNA = dna => dna.replace(/T/g, 'U');

function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}

function DNAtoRNA(dna) {
    return dna.replace(/t/gi, 'U');//i means case insensitive: the case of the letter is irrelevant
}



