//CODEWARS CODING CHALLENGE DESCRIPTION:

// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

function buildString(...template){
  return `I like #{template.join(',')}!`;
}

//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: 
//R: 
//E: 
//E:
//P: see steps below




//1st SOLUTION ITERATION
//Template strings have a $ instead of a # sign before the curly braces

function buildString(...template){
  return `I like ${template.join(',')}!`;
}
//Failed, spacing was wrong:
    // Return the correct String: expected 'I like Cheese,Milk,Chocolate!' to equal 'I like Cheese, Milk, Chocolate!'


//2nd SOLUTION ITERATION
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}
//Success! 


//TOP SOLUTIONS FROM CODEWARS USERS:

//Same answer
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//They used an arrow function, otherwise the same answer
const buildString = (...template) => `I like ${template.join(', ')}!`;















