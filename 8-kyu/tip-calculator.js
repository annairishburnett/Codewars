//CODEWARS CODING CHALLENGE DESCRIPTION:

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" 
// Because you're a nice person, you always round up the tip, regardless of the service.






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service. You need to consider the following ratings: see table above
//R: return a number rounded up to the nearest integer
//E: None given
//E: The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return: "Rating not recognised" 
//P: Psuedo code -> see comments in solution

//1st Iteration
//create a function that takes in an amount and a rating
function calculateTip(amount, rating) {
    const tipRate = rating.toLowerCase();//ensure rating is case insensitive and save memory by not writing .toLowerCase() in each if statement
    
    //check rating and apply tip accordingly - could also use switch case or an object 
    if(tipRate === 'terrible'){
      return 0;
    }else if(tipRate === 'poor'){
      return Math.ceil(.05 * amount);
    }else if(tipRate === 'good'){
      return Math.ceil(.1 * amount);
    }else if(tipRate === 'great'){
      return Math.ceil(.15 * amount);
    }else if(tipRate === 'excellent'){
      return Math.ceil(.2 * amount);
    }else{
      return 'Rating not recognised'
    }
  }




//TOP SOLUTIONS FROM CODEWARS USERS:

//This person used an object
const TIPS = {
    "terrible": 0.0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2
  };
  
  const calculateTip = (amount, rating) => {
    rating = rating.toLowerCase();//ensured case insensitive
    
    return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";//used ternary operator in combination with TIPs object to return correct amount
  };






//this person used switch case
function calculateTip(amount, rating) {
  switch(rating.toLowerCase()){
    case "terrible":return 0;
    case "poor":return Math.ceil(amount * 0.05);
    case "good":return Math.ceil(amount * 0.1);
    case "great":return Math.ceil(amount * 0.15);
    case "excellent":return Math.ceil(amount * 0.2);
    default:return "Rating not recognised";
  }
}



//Creative! They used an array and the indexes of each rating as a multiplier for .05
let calculateTip = (a,r) => {
    const i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(r.toLowerCase());
    return i === -1 ? "Rating not recognised" : Math.ceil(i*a*.05);
}













