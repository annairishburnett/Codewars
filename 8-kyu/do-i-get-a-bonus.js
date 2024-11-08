//CODEWARS CODING CHALLENGE DESCRIPTION:


// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean. If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//R: Return the total figure the individual will receive as a string prefixed with "£"
//E: None given.
//E: None given.
//P: Psuedo code -> see comments in solution


//create a function that takes in two parameters, salary and bonus
const bonusTime = (salary, bonus) => bonus ? `\u00A3${salary*10}` : `\u00A3${salary}`;//if bonus is true, return salary times 10, otherwise return just salary (prefix both with pound symbol)



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;//used a ternary operator and template strings like I did, but with actual pound symbol
}


const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;


//same as function above, just not arrow function
function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
}

//same as first solution, but in arrow function form
const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`;













