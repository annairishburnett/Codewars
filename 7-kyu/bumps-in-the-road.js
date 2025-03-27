//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead






//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: a string that contains either "_" (flat road) OR "n" (bumps).
//R: If there are 15 bumps or less, return "Woohoo!", otherwise return "Car Dead"
//E: "nnn" -> "Woohoo!"
//"_ _ _ _ _" -> "Woohoo!"
//"n n n n n n n n n n n n n n n n n n n n" -> "Car Dead"
//E: none given -> doesn't say anything about empty strings, numbers, or any other funny business so we won't try to account for any of that
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - remove all spaces from the string using .replace(/ /g, ''), then check number of characters with .length
        //skip this step, do .split(" ") instead
        //except we don't know if there are spaces or not??? try out a few things
        //also don't know if the "n"'s will all be lowercase???
// 3 - but we also have to check if the character is "n" or "_", so we can use if else statement with === comparison
// 4 - but to do that we need to isolate one of the characters out of the string, so we need to convert it into an array, then select one of the elements with array[0] - should work since the strings will either contain "n" OR "_"
// 5 - if the string is "_", return "Woohoo!", if the string is "n" AND length of the string is 15 or more, return "Car Dead"
//call the function


//1st ITERATION

const string = "n n n n n n n n n n n n n n n n n n n n";

function bump(x){
    const arr = x.split(' ');
    const char = arr[0];

    if((char === 'n') && (arr.length >= 15)){
        return "Car Dead"
    }else{
        return "Whoohoo!"
    }
}

console.log(bump(string));


//It worked in VSCode! Now to check if the string input in Codewars is the same as what I imagined for the first iteration.
    //It did not work in Codewars, here's the error message: expected 'Whoohoo!' to equal 'Woohoo!'
    //Test case strings were formatted like so: "__nn_nnnn__n_n___n____nn__nnn"
        //So I have to redo the function to accomodate that type of input:
        // 1 - use .split('')
        // 2 - use .filter(char => char === "n") to remove all of the "_" characters
        // 3 - then use .length on the array to get the number of "n" characters
        // 4 - don't need to create the const char or the char === "n" if else validation anymore because we're removing the "_" characters
        // 5 - use a ternary operator to solve in one line with a return at the beginning
        
//2nd ITERATION

function bump(x){
    return x.split('').filter(char => char === 'n').length >= 15 ? "Car Dead" : "Woohoo!";
}

console.log(bump(string));
//It worked in VSCode! Now to check if it works in Codewars.
    //It did not work in Codewars, here's the error message: expected 'Car Dead' to equal 'Woohoo!'
    //Test case strings it failed was: "nnn_n__n_n___nnnnn___n__nnn__"
        //Analysis of that string: there are 15 "n"'s, so according to the kata description it should be "Car Dead" -> check the kata description again to be sure you read it correctly
            // I did not -> it says if you encounter 15 or less bumps, you arrive home safely
                //It's an easy fix, switch .length >= 15 TO .length > 15

//3RD ITERATION
function bump(x){
    return x.split('').filter(char => char === 'n').length > 15 ? "Car Dead" : "Woohoo!";
}
//It worked in Codewars! Success!






//TOP SOLUTIONS FROM CODEWARS USERS:

//Very similar to my solution, but used .split('n') instead which would create an array one longer than the number of the delimiter "n", so therefore the .length > 15 had to increase to .length > 16
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"


//I thought about trying to use .match in my solution, and this makes sense to me -> x.match(/n/g) would select every instance of the "n" character, then if there is no "n" it would use || comparison logic for non-bolean values and (null || []) would evaluate to [] because null is falsy, then the rest of the expression is the same as mine
function bump(x){
    return (x.match(/n/g) || []).length > 15 ? "Car Dead" : "Woohoo!";
}


//Another interesting way to use .split, I haven't seen it without the () before - not sure I like that, it's not as clean and is harder to read maybe? I wonder if there's ever a benefit to doing it that way
const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';












