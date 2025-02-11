//CODEWARS CODING CHALLENGE DESCRIPTION:

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false




//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Write a function called checkCoupon which verifies that a coupon code is valid and not expired. A coupon is no longer valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
//R: return true or false
//E: checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//E: Are there any edge cases? No, none given
//P: Psuedo code -> see comments in solution
        //create a function that takes in 4 parameters: string of nums1, string of nums2, currentDate, expirationDate
        //so we'll need to compare string of nums1 and string of nums2 to see if they are exactly equal, AND currentDate and expirationDate to see if currentDate is AFTER expirationDate
        //if conditional for 1st part, then use && for second part because we want both statements to be true
        //otherwise return false
        //(nums1 === nums2) && (currentDate is before expirationDate)
        //might need to convert the dates into date objects for comparison? Look up on MDN how to compare dates
            //actually probably only passing in couponEntered and currentDate, then compare those to values already stored in the code, maybe as an object called "coupon" date code and expirationDate


//1st Iteration

function checkCoupon(couponEntered, currentDate){
    if((couponEntered === coupon.code) && (currentDate <= coupon.expirationDate)){//I know the second part of this conditional won't work because the dates aren't in the correct format to compare greater than/= to right now
        return true
    }else{
        return false;
    }
}

// let coupon = {
//     code: '123',
//     expirationDate: "July 9, 2015"
// };

console.log(checkCoupon("123", "July 9, 2015")); //true
//Look up Date in MDN
    //Found .valueOf() to turn dates into seconds, which can be compared with conditional operators


//2nd Iteration
function checkCoupon(couponEntered, currentDate){
    if((couponEntered === coupon.code) && (currentDate.valueOf() <= coupon.expirationDate.valueOf())){
        return true
    }else{
        return false;
    }
}

// let coupon = {
//     code: '123',
//     expirationDate: "July 9, 2015"
// };

console.log(checkCoupon("123", "July 13, 2015")); //true
//this should have been false, so how I'm converting the dates isn't working
//have to create date new Date objects before using .valueOf() on them per MDN, so create variables to convert them and then compare them

//3rd Iteraton
function checkCoupon(couponEntered, currentDate){
    const dateEntered = new Date(currentDate).valueOf();
    const couponExpiration = new Date(coupon.expirationDate).valueOf();

    if((couponEntered === coupon.code) && (dateEntered <= couponExpiration)){
        return true
    }else{
        return false;
    }
}

// let coupon = {
//     code: '123',
//     expirationDate: "July 2, 2015"
// };

console.log(checkCoupon("123", "July 9, 2015")); //true
//Success! Refactor if else statement to ternary operator


//4th Iteration
function checkCoupon(couponEntered, currentDate){
    const dateEntered = new Date(currentDate).valueOf();
    const couponExpiration = new Date(coupon.expirationDate).valueOf();

    return (couponEntered === coupon.code) && (dateEntered <= couponExpiration) || false;
}

let coupon = {
    code: '123',
    expirationDate: "July 2, 2015"
};

console.log(checkCoupon("123", "July 9, 2015")); //true
//used or || instead of ternary operator, which wasn't necessary
//got error code on Codewars:
        // assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
        // assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
            //dates look okay, but now coupon code has a letter in it, and I might not have accounted for that possibility in the code
            //or they wanted 4 parameters instead of 2 with an object


//5th Iteration
function checkCoupon(couponEntered, couponCode, currentDate, expirationDate){
    const dateEntered = new Date(currentDate).valueOf();
    const couponExpiration = new Date(expirationDate).valueOf();

    return (couponEntered === couponCode) && (dateEntered <= couponExpiration) || false;
}
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); //true
//Codewars wanted 4 parameters, the coupon codes were fine, the letter didn't matter because it's comparing exact equality of strings






//TOP SOLUTIONS FROM CODEWARS USERS:


//Well that solution is much simpler --> look up how .parse() works

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}


//interesting, they used new Date() but didn't bother with .valueOf(), so apparently it's not necessary --> try my code again without it

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}

        //Here's my code without .valueOf():
        function checkCoupon(couponEntered, couponCode, currentDate, expirationDate){
            const dateEntered = new Date(currentDate);
            const couponExpiration = new Date(expirationDate);
        
            return (couponEntered === couponCode) && (dateEntered <= couponExpiration) || false;
        }
        //still works! 


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode &&
           Date.parse(currentDate) <= Date.parse(expirationDate);
}


//basically the same as my answer without .valueOf()
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var cd = new Date(currentDate);
    var ed = new Date(expirationDate);
    return (enteredCode === correctCode) && (ed >= cd);
}











