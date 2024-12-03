//CODEWARS CODING CHALLENGE DESCRIPTION:

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:


// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50


// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.


//MY SOLUTION:
//Parameters, Return, Examples, Edge Cases, Pseudo Code:

//P: a number (integer) will be passed in as an argument, You can use \n in string to jump to the next line
//R: return a multiplication table as a string for a number that is always an integer from 1 to 10.
//E: a multiplication table (string) for number == 5 looks like below:
        // 1 * 5 = 5
        // 2 * 5 = 10
        // 3 * 5 = 15
        // 4 * 5 = 20
        // 5 * 5 = 25
        // 6 * 5 = 30
        // 7 * 5 = 35
        // 8 * 5 = 40
        // 9 * 5 = 45
        // 10 * 5 = 50
//E: newlines should be added between rows, but there should be no trailing newline at the end
//P: Psuedo code -> see comments in solution


//create a function that takes in a number
function multiTable(number) {
    let result = '';//create a variable result with a value of an empty string that we can add to

    //use a for loop to iterate from 1 to 10
    for (let i = 1; i <= 10; i++){
      result += `${i} * ${number} = ${i * number}\n`;//concatenate a template string using += that has i * number = i * num and add newline \n
    }
    return result.trim();//return the result and use .trim() to cut the newline off of the end
}



//TOP SOLUTIONS FROM CODEWARS USERS:

//similar answer to mine
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
}



function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}



const multiTable = (n) => {
	const table = []
	for(let i = 1; i <= 10; i++) {
		table.push(`${i} * ${n} = ${i*n}`)
	}
	return table.join('\n')
}



function multiTable(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
      table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
}



const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')


function multiTable(n) {
    return `1 * ${n} = ${n*1}\n2 * ${n} = ${n*2}\n3 * ${n} = ${n*3}\n4 * ${n} = ${n*4}\n5 * ${n} = ${n*5}\n6 * ${n} = ${n*6}\n7 * ${n} = ${n*7}\n8 * ${n} = ${n*8}\n9 * ${n} = ${n*9}\n10 * ${n} = ${n*10}`
  }//dupa







