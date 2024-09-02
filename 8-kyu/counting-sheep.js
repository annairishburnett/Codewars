//CODEWARS CODING CHALLENGE DESCRIPTION:


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined



//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: An array of true and false
//R: The total number of "sheep" (true elements) in the array
//E: [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false,
    //true,  false, false, true, true,  true,  true,  true, false, false, true,  true] => 17
//P: Psuedo code -> see comments in solution



const sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
  
    
function countSheeps(sheep) {
  // Initialize count
  let count = 0;
  
  for(let i = 0; i < sheep.length; i++)//loop through each element in the array
    if(sheep[i] == true){
      count++;//if an element is true, add one to the count above
    }
      
  return count;//return total count
}
  
console.log(countSheeps(sheep));




//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;//Used the .filter() method and the .length method to calculate # true elements
}


function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
}

