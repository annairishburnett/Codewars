//CODEWARS CODING CHALLENGE DESCRIPTION:


// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4





//MY SOLUTION:
//Parameters, Return, Examples, Pseudo Code:

//P: See above. Pay attention to 10 match limit.
//R: an integer that equals total points
//E: ["3:1", "2:2", "0:1", "4:1", "2:0", "3:1", "2:2", "0:1", "4:1", "2:0"] --> 20
//P: Psuedo code -> see comments in solution


//create a function that takes in an array
function points(games) {
    let points = 0;//create a variable for counting total points
     
    //loop through the array to add points to total for each math
     games.forEach((item, index) => {
         let x = Number(item[0]);//create variable for our team's points
         let y = Number(item[2]);//create variable for their team's points
        
         //make sure we only add points from 10 games
         if(index < 10){
             if(x > y){
                 points += 3;//add 3 points if we win
             }else if(x === y){
                 points += 1;//add 1 point if we tie
             }
         }
     })
     return points;//return total number of points
}



//OTHER TOP SOLUTIONS FROM CODEWARS USERS:

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }



function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
}


function points(games) {
    var sum=0;
    for (var i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
}


function points(games) {
    // totalPoints will store the accumulated points
    let totalPoints = 0;
      
      // loop through the games array to get the scores
      for(i=0; i<games.length; i++) {
     
       // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
        let xScore = Number(games[i].charAt(0)); 
        let yScore = Number(games[i].charAt(2));
        
        // Add points depending on the values of xScore compared to yScore
        if (xScore > yScore) { totalPoints += 3; }
        if (xScore < yScore) { totalPoints += 0; }
        if (xScore === yScore) { totalPoints += 1; }
      }
      
      return totalPoints;
}