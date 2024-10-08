//CODEWARS CODING CHALLENGE DESCRIPTION:



// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string




//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Input will never be an empty string.
//R: Return the resulting string.
//E: 528931 --> '101100'
//P: Psuedo code -> see comments in solution


//this solution is way too complicated, see 1st solution from other Codewars users below (user ternary operator instead)
function fakeBin(x){
    let array = x.split('')
    let newArray = [];

    array.forEach(num => {
        if(num < 5){
            newArray.push(0);
        }else if(num >= 5){
            newArray.push(1);
        }
    })

    let newString = newArray.join('');
    return newString;
}





//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
}

function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}



