//CODEWARS CODING CHALLENGE DESCRIPTION:

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni" ->	"Patron Tequila"
// "School Counselor" -> "Anything with Alcohol"
// "Programmer"	-> "Hipster Craft Beer"
// "Bike Gang Member" -> "Moonshine"
// "Politician"	-> "Your tax dollars"
// "Rapper"	-> "Cristal"
// anything else  -> "Beer"

// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: In put will be a string. Ignore capitalization.
//R: Return will be based on the table above, for example an input of "programmer" will result in an output of "hipster craft beer"
//E: "Jabroni" ->	"Patron Tequila"
// "School Counselor" -> "Anything with Alcohol"
// "Programmer"	-> "Hipster Craft Beer"
// "Bike Gang Member" -> "Moonshine"
// "Politician"	-> "Your tax dollars"
// "Rapper"	-> "Cristal"
// anything else  -> "Beer"
//E: if the input to the function is not any of the values in the table, then the return value should be "Beer". Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
//P: see steps below

//Pseudo Code
//1 -> create a function that takes in a string
//2 -> convert string to all lowercase using .toLowerCase()
//3 -> use if/else statements and comparison === to check for each possibility in the table, jabroni - rapper and return appropriate output, the else should be "beer"
//4 -> return the value, call the function, and console.log the result

//1st ITERATION:

const person = "Programmer";

function getDrinkByProfession(param){
    const profession = param.toLowerCase();

    if(profession === "jabroni"){
        return "Patron Tequila";
    }else if(profession === "school counselor"){
        return "Anything with Alcohol";
    }else if(profession === "programmer"){
        return "Hipster Craft Beer";
    }else if(profession === "bike gang member"){
        return "Moonshine";
    }else if(profession === "politician"){
        return "Your tax dollars";
    }else if(profession === "rapper"){
        return "Cristal";
    }else{
        return "Beer";
    }
}

console.log(getDrinkByProfession(person)); //Hipster Craft Beer
//Success! 



//TOP SOLUTIONS FROM CODEWARS USERS:

//They used switch cases instead of if/else statements
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return	"Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

//They used an object instead of switch cases or if/else statements
const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}

const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"















