//CODEWARS CODING CHALLENGE DESCRIPTION:


// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Your task is correct the errors in the digitised text (string). You only have to handle the following mistakes: (5 to S, 0 to O, 1 to I). The test cases contain numbers only by mistake.
//R: a string with mistakes corrected (no numbers)
//E: None given.
//E: None given.
//P: Psuedo code -> see comments in solution


//create a function that takes in a string
const correct = (string) => string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I');//replace incorrect characters with correct ones



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')



const corrections = {
	'5': 'S',
	'0': 'O',
  '1': 'I',
};

const correct = string => (
	string.replace(/[501]/g, character => corrections[character])
);



function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}



function correct(string){
    return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
}










