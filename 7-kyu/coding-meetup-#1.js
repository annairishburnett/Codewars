//CODEWARS CODING CHALLENGE DESCRIPTION:

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.





//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: input will be an array of objects representing data about developers who have signed up to attend the coding meetup that you are organising
    // The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.
//R: return should be a the number of JavaScript developers from Europe
//E: var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.
//E: none given - data will be uniform
//P: Psuedo code -> see comments in solution


// 1 - create a function that takes in an array
// 2 - create a variable europeanJSDevs and set it equal to zero
// 3 - use for of loop to iterate through the array and find objects with continent === 'Europe' && language === 'JavaScript
// 4 - if that's the case, europeanJSDevs += 1
// 5 - return the value and call the function


//1ST ITERATION
let list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Evi', lastName: 'V.', country: 'Belgium', continent: 'Europe', age: 35, language: 'JavaScript' }
];


function coundDevelopers(list){
    let euroJSDevs = 0;

    for(let dev of list){
            if((dev.continent === 'Europe') && (dev.language === 'JavaScript')){
                    euroJSDevs++;
            }
    }

    return euroJSDevs;
}

console.log(coundDevelopers(list1));
//First trrryyyy! :-) On VSCode anyway, check it on Codewars.
//Success!




//TOP SOLUTIONS FROM CODEWARS USERS:


//Ahh, filter with .length makes sense for drier code 
function countDevelopers(list) {
    return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
  }


//Used filter twice instead of using &&, but otherwise same as above
function countDevelopers(list) {
    return list
      .filter(dev => dev.language === "JavaScript")
      .filter(dev => dev.continent === "Europe")
      .length
  }


//Used reduce with a count instead of a separate variable, otherwise pretty much the same
  function countDevelopers(list) {
    return list.reduce((count, dev) => 
      (dev.continent === 'Europe' && dev.language === 'JavaScript')
        ? count + 1 : count
      , 0);
  }



//Like my answer, but with a regular for loop instead of a for of loop
  function countDevelopers(list) {
    x=0;
  for(i=0;i<list.length;i++){
      if(((list[i].continent)==='Europe')&&((list[i].language)==="JavaScript")){
          x+=1
      }
  }
      return x
  }




