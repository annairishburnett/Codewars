//CODEWARS CODING CHALLENGE DESCRIPTION:

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!



//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: Input is a string of letters, with no spaces, no nums or special characters, or other funny business. See lists above for right side letters, left side letters, and victim letters. Right and left side letters have a specific "power" - see above. Get a total RS value and a total LS value and compare - whoever has the higher number wins. 
//R: If RS value is higher, return "Right side wins!", if LS value is higher, return "Left side wins!", if they tie, return "Let's fight again!"
//E: alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!
//E: no edge cases given
//P: Psuedo code -> see comments in solution

// 1 - create a function that takes in a string
// 2 - create an object that contains the letters and their values as key value pairs
// 3 - within the function use .replace() to replace the letters with their values, referencing the object key value pairs
            //forgot that I'd have to account for all of the other letters, too -> add them to the object and give them all a value of zero
// 4 - then create RS const and LS const, set them equal to string converted into an array and use .match(/[]/) with a character set to get only the letters you want for each const
            //oops, can't do it in that order because now we don't know if the values belong to the LS or RS, need to do this step before step #3
// 5 - then use reduce to get total
// 6 - then use if/else statement to compare RS and LS values to return "Right side wins!", "Left side wins!", or "Let's fight again!"

//1ST ITERATION

let string = 'wmq';

function alphabetWar(str){
    const rightSide = values.match(/[mqdz]/)
    

    // const values = str.replace(/./g, function(val){
    //     return alphabetWar.pairs[val];
    // });
    return rightSide;
}

alphabetWar.pairs = {
    //left side letters and their power:
    w: 4,
    p: 3,
    b: 2,
    s: 1,

    //right side letters and their power:
    m: 4,
    q: 3,
    d: 2,
    z: 1,

    //other letters don't have power and are only victims:
    a: 0,
    c: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    n: 0,
    o: 0,
    r: 0,
    t: 0,
    u: 0,
    v: 0,
    x: 0,
    y: 0,
};

console.log(alphabetWar(string));


//2nd ITERATION
let string2 = 'wpmq';

function alphabetWar(str){
    const rightSide = str.match(/[mqdz]/g);
    const leftSide = str.match(/[wpbs]/g);
    

    const rsVal = rightSide.replace(/./g, function(val){
        return alphabetWar.pairs[val];
    });
    const lsVal = leftSide.replace(/./g, function(val){
        return alphabetWar.pairs[val];
    });

    if(rsVal > lsVal){
        return "Right side wins!"
    }else if(lsVal > rsVal){
        return "Left side wins!"
    }else{
        return "Let's fight again!"
    }
    
}

alphabetWar.pairs = {
    //left side letters and their power:
    w: 4,
    p: 3,
    b: 2,
    s: 1,

    //right side letters and their power:
    m: 4,
    q: 3,
    d: 2,
    z: 1,

    //other letters don't have power and are only victims:
    a: 0,
    c: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    n: 0,
    o: 0,
    r: 0,
    t: 0,
    u: 0,
    v: 0,
    x: 0,
    y: 0,
};

console.log(alphabetWar(string2));// Let's fight again!

//main.js:3023 Uncaught TypeError: rightSide.replace is not a function at alphabetWar
        //forgot that str.match(/[wpbs]/g) creates an array, I have to convert it back to a string using .toString() or .join('') before I can use .replace(...)


//3rd ITERATION
function alphabetWar(str){
    const rightSide = str.match(/[mqdz]/g);
    const leftSide = str.match(/[wpbs]/g);
    

    const rsVal = rightSide.join('').replace(/./g, function(val){
        return alphabetWar.pairs[val];
    });
    const lsVal = leftSide.join('').replace(/./g, function(val){
        return alphabetWar.pairs[val];
    });

    if(rsVal > lsVal){
        return "Right side wins!"
    }else if(lsVal > rsVal){
        return "Left side wins!"
    }else{
        return "Let's fight again!"
    };
}

//Works in VSCode! Time to test it in Codewars:
//Failed - TypeError: Cannot read properties of null (reading 'join') at alphabetWar (test.js:10:28)
        //Didn't account for empty strings, and apparently there can be empty strings
        //So, if the string is empty const rightSide = fight.match(/[mqdz]/g) === null
        //Try adding || 0 to the end:

        function alphabetWar(fight){
            const rightSide = fight.match(/[mqdz]/g);
            const leftSide = fight.match(/[wpbs]/g);
        
            const rsVal = rightSide.join('').replace(/./g, function(val){
                return alphabetWar.pairs[val] || 0;
            });
            const lsVal = leftSide.join('').replace(/./g, function(val){
                return alphabetWar.pairs[val] || 0;
            });
        
            if(rsVal > lsVal){
                return "Right side wins!"
            }else if(lsVal > rsVal){
                return "Left side wins!"
            }else{
                return "Let's fight again!"
            };
        }
        //Still got Uncaught TypeError: Cannot read properties of null (reading 'join') at alphabetWar
            //So .join() can't be applie to a null value, so we need a ternary operator to avoid that
            function alphabetWar(fight){
                const rightSide = fight.match(/[mqdz]/g);
                const leftSide = fight.match(/[wpbs]/g);
            
                const rsVal = rightSide === null ? 0 : rightSide.join('').replace(/./g, function(val){
                    return alphabetWar.pairs[val] || 0;
                });
                const lsVal = leftSide === null ? 0 : leftSide.join('').replace(/./g, function(val){
                    return alphabetWar.pairs[val] || 0;
                });
            
                if(rsVal > lsVal){
                    return "Right side wins!"
                }else if(lsVal > rsVal){
                    return "Left side wins!"
                }else{
                    return "Let's fight again!"
                };
            }
            //Fixed it in VSCode! Now let's check Codewars again.
            //Failed: expected 'Left side wins!' to equal 'Let\'s fight again!' -> input string = "zdqmwpbs"
                    //Check what rsVal and lsVal are returning with that error:
                    //Right: 1234. Left: 4321
                    //Ohh yeah, forgot to use.reduce to get the TOTAL of the nums in rsVal and lsVal
                    function alphabetWar(fight){
                        const rightSide = fight.match(/[mqdz]/g);
                        const leftSide = fight.match(/[wpbs]/g);
                    
                        const rsVal = rightSide === null ? 0 : rightSide.join('').replace(/./g, function(val){
                            return alphabetWar.pairs[val] || 0;
                        });
                        const lsVal = leftSide === null ? 0 : leftSide.join('').replace(/./g, function(val){
                            return alphabetWar.pairs[val] || 0;
                        });
                    
                        const rsTotal = rsVal.reduce((acc,c) => acc + c, 0);
                        const lsTotal = lsVal.reduce((acc,c) => acc + c, 0);
                    
                        return `Right: ${rsTotal}. Left: ${lsTotal}`;
                    
                        if(rsVal > lsVal){
                            return "Right side wins!"
                        }else if(lsVal > rsVal){
                            return "Left side wins!"
                        }else{
                            return "Let's fight again!"
                        };
                    }
                    //Uncaught TypeError: rsVal.reduce is not a function at alphabetWar
                    //Have to turn it into an array first with .split('')
                    //Using template string `Right: ${rsTotal}. Left: ${lsTotal}` to check my returns is not giving me an accurate read on what type of value rsTotal and lsTotal are, change to vals in an array 
                    function alphabetWar(fight){
                        const rightSide = fight.match(/[mqdz]/g);
                        const leftSide = fight.match(/[wpbs]/g);
                    
                        const rsVal = rightSide === null ? 0 : rightSide.join('').replace(/./g, function(val){
                            return alphabetWar.pairs[val] || 0;
                        });
                        const lsVal = leftSide === null ? 0 : leftSide.join('').replace(/./g, function(val){
                            return alphabetWar.pairs[val] || 0;
                        });
                    
                        const rsTotal = rsVal.split('').reduce((acc,c) => acc + c, 0);
                        const lsTotal = lsVal.split('').reduce((acc,c) => acc + c, 0);
                    
                        return [rsTotal, lsTotal];
                    
                    //     if(rsVal > lsVal){
                    //         return "Right side wins!"
                    //     }else if(lsVal > rsVal){
                    //         return "Left side wins!"
                    //     }else{
                    //         return "Let's fight again!"
                    //     };
                    }
                    //Got: ['01234', '04321']
                    //Still the numbers in string form, not a sum
                    //Use .map(Number) to convert elements in the array into nums instead of strings
                    function alphabetWar(fight){
                        const rightSide = fight.match(/[mqdz]/g);
                        const leftSide = fight.match(/[wpbs]/g);
                    
                        const rsVal = rightSide === null ? 0 : rightSide.join('').replace(/./g, function(val){
                            return alphabetWar.pairs[val] || 0;
                        });
                        const lsVal = leftSide === null ? 0 : leftSide.join('').replace(/./g, function(val){
                            return alphabetWar.pairs[val] || 0;
                        });
                    
                        const rsTotal = rsVal.split('').map(Number).reduce((acc,c) => acc + c, 0);
                        const lsTotal = lsVal.split('').map(Number).reduce((acc,c) => acc + c, 0);
                    
                        return [rsTotal, lsTotal];
                    
                    //     if(rsVal > lsVal){
                    //         return "Right side wins!"
                    //     }else if(lsVal > rsVal){
                    //         return "Left side wins!"
                    //     }else{
                    //         return "Let's fight again!"
                    //     };
                    }
                    //Got: [10, 10] which should evaluate to "Let's fight again!" -> time to test with Codewars again!
                    //TypeError: lsVal.split is not a function at alphabetWar
                            //Not sure what is wrong now... take a break and come back later :) 
                            function alphabetWar(fight){
                                const rightSide = fight.match(/[mqdz]/g);
                                const leftSide = fight.match(/[wpbs]/g);
                            
                                const rsVal = rightSide === null ? 0 : rightSide.join('').replace(/./g, function(val){
                                    return alphabetWar.pairs[val] || 0;
                                });
                                const lsVal = leftSide === null ? 0 : leftSide.join('').replace(/./g, function(val){
                                    return alphabetWar.pairs[val] || 0;
                                });

                                return lsVal// number 0 
                                //can't use .split() on a number, has to be a string
                                //add .toString() before .split('') below
                            
                                const rsTotal = rsVal.split('').map(Number).reduce((acc,c) => acc + c, 0);
                                const lsTotal = lsVal.split('').map(Number).reduce((acc,c) => acc + c, 0);
                            
                                if(rsTotal > lsTotal){
                                    return "Right side wins!"
                                }else if(lsTotal > rsTotal){
                                    return "Left side wins!"
                                }else{
                                    return "Let's fight again!"
                                };
                            }

                            //Latest iteration:
                            function alphabetWar(fight){
                                const rightSide = fight.match(/[mqdz]/g);
                                const leftSide = fight.match(/[wpbs]/g);
                            
                                const rsVal = rightSide === null ? 0 : rightSide.join('').replace(/./g, function(val){
                                    return alphabetWar.pairs[val] || 0;
                                });
                                const lsVal = leftSide === null ? 0 : leftSide.join('').replace(/./g, function(val){
                                    return alphabetWar.pairs[val] || 0;
                                });
                            
                                const rsTotal = rsVal.toString().split('').map(Number).reduce((acc,c) => acc + c, 0);
                                const lsTotal = lsVal.toString().split('').map(Number).reduce((acc,c) => acc + c, 0);
                            
                                if(rsTotal > lsTotal){
                                    return "Right side wins!"
                                }else if(lsTotal > rsTotal){
                                    return "Left side wins!"
                                }else{
                                    return "Let's fight again!"
                                };
                            }
                            //Success on VSCode and Anki!

//FINAL ITERATION:
function alphabetWar(fight){
    const rightSide = fight.match(/[mqdz]/g);
    const leftSide = fight.match(/[wpbs]/g);

    const rsVal = rightSide === null ? 0 : rightSide.join('').replace(/./g, function(val){
        return alphabetWar.pairs[val] || 0;
    });
    const lsVal = leftSide === null ? 0 : leftSide.join('').replace(/./g, function(val){
        return alphabetWar.pairs[val] || 0;
    });

    const rsTotal = rsVal.toString().split('').map(Number).reduce((acc,c) => acc + c, 0);
    const lsTotal = lsVal.toString().split('').map(Number).reduce((acc,c) => acc + c, 0);

    if(rsTotal > lsTotal){
        return "Right side wins!"
    }else if(lsTotal > rsTotal){
        return "Left side wins!"
    }else{
        return "Let's fight again!"
    };
}

alphabetWar.pairs = {
    //left side letters and their power:
    w: 4,
    p: 3,
    b: 2,
    s: 1,

    //right side letters and their power:
    m: 4,
    q: 3,
    d: 2,
    z: 1,

    //other letters don't have power and are only victims:
    a: 0,
    c: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    n: 0,
    o: 0,
    r: 0,
    t: 0,
    u: 0,
    v: 0,
    x: 0,
    y: 0,
};

//I'm sure there's a way to refactor this and make it dryer, and I already spent a lot of time solving it so we'll see what other people did to solve it :-) 

                            
                            





//TOP SOLUTIONS FROM CODEWARS USERS:



















