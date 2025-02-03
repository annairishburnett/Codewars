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
//E: None given
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




//TOP SOLUTIONS FROM CODEWARS USERS:


//Was not able to view them without forfeiting the answer














