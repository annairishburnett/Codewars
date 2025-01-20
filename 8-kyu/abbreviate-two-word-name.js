//CODEWARS CODING CHALLENGE DESCRIPTION:


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: a name in the form of a string with two words and one space in between them
//R: two capital letters with a dot separating them
//E: Sam Harris => S.H
// patrick feeney => P.F
//P: Psuedo code -> see comments in solution


//first iteration
//works with names longer than two words
function abbrevName(name){
    let array = name.split(' ')//create an array of two elements
    let initials = [];//create a new empty array

    //loop through the array and push the first character of each element (and make them uppercase) into the array initials
    array.forEach((word, index)=> {
        initials.push(word.charAt(0).toUpperCase())
        if(index < array.length - 1){
            initials.push('.')//if the element is not at the last index in the array, add a period
        }
    })

    let result = initials.join('');//turn the array of elements into a string with no spaces in between characters

    return result
}

//second iteration
//split the string into an array of two elements, then take the 1st element of the zeroth index and the 1st element of the 1st index, add a period in between them, and make it uppercase 
function abbreviateName(str){
    return (str.split(' ')[0][0] + '.' + str.split(' ')[1][0]).toUpperCase();
}



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function abbrevName(name){
    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

function abbrevName(name){
    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()




