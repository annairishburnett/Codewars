//CODEWARS CODING CHALLENGE DESCRIPTION:

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string: Hello, John Smith! Welcome to Phoenix, Arizona!






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input will be an array of varying lengths containing a name, then two strings with the name of the city and the state. Any empty arrays, numbers, partial data, or other funny business? No.
//R: Return will be the string: Hello, Name Name! Welcome to City, State!
//E: ['John', 'Smith'], 'Phoenix', 'Arizona' -> Hello, John Smith! Welcome to Phoenix, Arizona!
//E: The only edge case is that the name might be shorter or longer.
//P: Psuedo code -> see comments in solution

//1 - create a function that takes in an arr, a string, and a string
//2 - create a variable "result" with an the string "Hello, " assigned to it
//3 - use forEach or for of loop to loop through the array and add each name to the result string using concatenation +=
//4 - if arr element is the last element, add "! Welcome to " to the string using concatenation +=
//5 - result += str1, + ' ' + str2 + '!'
//6 - return the result and call the function/console log result to test


//1st Iteration:

function sayHello(name, city, state){
    let result = "Hello, ";

    for(let i = 0; i <= name.length - 1; i++){
        result += name[i];
        
        if(name[i] !== name[name.length - 1]){
            result += ' ';
        }else{
            result += "! Welcome to "
        }
    }

    result += city 
    result += ', ' 
    result += state += '!';

    return result;
}

console.log(sayHello(['Piyanart', 'Promsawad'], 'Marquette', 'Michigan')); //Hello, Piyanart Promsawad! Welcome to Marquette, Michigan!

//It works and is accepted by Codewars! However this code is ugly and wet, so I will refactor before submitting.

//2nd Iteration:

//Maybe I can use reduce, and have the initial value of reduce be "Hello Name! Welcome to city, state!" But reduce works on arrays, not arrays plus strings, but I could use .replace() instead because that works on strings, and then still use a loop for the name part

function sayHello(name, city, state){
    let result = "Hello, name! Welcome to city, state!";
    let fullName = ''

    for(let i = 0; i <= name.length - 1; i++){
        fullName += name[i]
        if(name[i] !== name[name.length - 1]){
            fullName += ' ';
        }
    }
    result = result.replace('name', fullName).replace('city', city).replace('state', state);

    return result;
}

console.log(sayHello(['Piyanart', 'Promsawad'], 'Marquette', 'Michigan')); // Hello, Piyanart Promsawad! Welcome to Marquette, Michigan!
//This worked too, and is more elegant. I think there's probably a better solution that I could come up with, and I've already spent enough time on this problem so I'll submit my answer and see what other codewars people came up with to learn from them. 



//TOP SOLUTIONS FROM CODEWARS USERS:

//Yep, there are way easier answers :-) So obvious now that I see it, hehe. Just use a template string!
function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


//And this one, too. Or use concatenation with .join(' ') with a space in it. I got too in my head about how to work with the name in the form of an array and made it more complicated than necessary. 
function sayHello( name, city, state ) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
}


//And this one, same as the first but in an arrow function. 
const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`


//Or this one that creates and fullName variable and then uses a template string
function sayHello( name, city, state ) {
    let fullName = name.join(" ");  
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}


//And this is why we do codewars, folx! It teaches us to practice solving different problems and shows us other ways of thinking about solving them that we might have overlooked, forgotten, or didn't know about :) 






