//CODEWARS CODING CHALLENGE DESCRIPTION:


// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1" --> bad example





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//R: returns the url with anything after the anchor (#) removed.
//E: "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//E: None given, BUT an edge case is a URL that does not have an anchor (#)
//P: Psuedo code -> see comments in solution


//1st Iteration
//create a function that takes in a url (string)
function removeURLAnchor(url){
    const anchor = url.split('').findIndex(item => item === '#');//split string into an array, identify the anchor (#) index
    return url.slice(0, anchor);//return string minus anchor and what follows it
}
//First try! We'll see if Codewars accepts it
//Fail, receive the following error: expected 'www.codewars.com/katas' to equal 'www.codewars.com/katas/'
//However, there is no "#" in the test case to remove, so there is an error with this Kata:
        //assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
        //Test case is also inconsistent with the error message output (lack of forward slash on the input)
//It has 4 issues reported, others are saying that the test cases are incorrect
//I could not complete this Kata because of the incorrect test case, but I posted an issue report:

    // In the directions the second example given does not have an anchor (#) in it: "www.codewars.com?page=1" -->"www.codewars.com?page=1"

    // The third test case gives an error message because it does not have an anchor (#) in it: expected 'www.codewars.com/katas' to equal 'www.codewars.com/katas/'


//Oops! Got a reply that it wasn't an issue, my code remove a forward slash from the url, it was supposed to return the same URL as the original because there was no anchor. Here is the full comment:

        // That's not a kata issue, your code is returning a wrong answer. If there is no anchor, then your code should return exactly the same url, as shown in the example and expected in the test.

        // expected 'www.codewars.com/katas' // <- This is your answer, you removed the / at the end
        // to equal 'www.codewars.com/katas/'



//2nd Iteration
function removeURLAnchor(url){
    const anchor = url.split('').findIndex(item => item === '#');
   
    return anchor === -1 ? url : url.slice(0, anchor);
}
//I think I can refacor this to make it simpler
//Use a ternary operator
//Use .includes() to separate between URLs with anchors and without anchors
//Use .split() to separate string at the anchor (#) if it's included


//3rd Iteration
function removeURLAnchor(url){
    return url.includes('#') ? url.split('#')[0] : url;
}
//Sure could!






//TOP SOLUTIONS FROM CODEWARS USERS:


//I am getting closer with seeing how functions can be simplified, and I keep missing the last step (the automatic behavior of return url.split('#')[0]; returning a complete URL if it didn't contain an anchor, for example)

function removeUrlAnchor(url){
    return url.split('#')[0];
}



//Interesting, it occured to me that replace might work
//Look up how the * works in replace

function removeUrlAnchor(url){
    return url.replace(/#.*/gi,"");
}



//Replace has so many options for how to use it...
const removeUrlAnchor = url => url.replace(/#.+$/,'');


//Arrow function version of 1st answer above
const removeUrlAnchor = (url) => url.split("#")[0];



function removeUrlAnchor(url) {
    return url.replace(/#.+/ig, "");
}


