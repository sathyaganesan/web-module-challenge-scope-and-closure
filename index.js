// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  => In counter1 variable is declared outside the function.
 *  => In counter2 variable is declared inside the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  => Counter1 uses the closure because the variable is declared outside the function counter2().
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * => Counter1 is prefered when the variable is no need to increase.
 * => Counter2 is prefered to when the variables are supposed to access because its a global.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();


// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. 
This should be a whole number between 0 and 2. */

function inning(){
  let ranNumber = Math.floor(Math.random() * 3);
  return ranNumber;
}

 console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and
 a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(fun, noOfInnings){
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < noOfInnings; i++) {
    homeScore = (homeScore + fun());
  }
  for (let i = 0; i < noOfInnings; i++) {
    awayScore = (awayScore + fun());
  }
  let score = {Home: homeScore, Away: awayScore};
 return score;
}

 console.log(finalScore(inning, 9));
  
 /* Task 4: 
Create a function called `scoreboard` that accepts the following parameters: 
(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
  let awayFinalTotal = 0;
  let homeFinalTotal = 0;
  let sumAwayTotal = [];
  let sumHomeTotal = [];
  let finalSum = 0;
  function scoreboard(callback1, callback2, numOfInnings) {
    for (let i = 1; i <= numOfInnings; i++) {
        awayFinalTotal = callback2();
        sumAwayTotal.push(awayFinalTotal);
        homeFinalTotal = callback2();
        sumHomeTotal.push(homeFinalTotal);
        if (i === 1){
            console.log(`1st inning: ${callback1()}`);
        } else if (i === 2){
            console.log(`2nd inning: ${callback1()}`);
        } else if (i === 3){
            console.log(`3rd inning: ${callback1()}`);
        } else {
            console.log(`${i}th inning: ${callback1()}`);
        }
    }  
    function getArraySum(a){
        var total=0;
        for(var i in a) { 
            total += a[i];
        }
        return total;
    }
    
    let awayFinalSum = getArraySum(sumAwayTotal);
    let homeFinalSum = getArraySum(sumHomeTotal);
    console.log(`Final Score: ${awayFinalSum} - ${homeFinalSum}`);
  }

   function getInningScore(){
    awayFinal = awayFinalTotal;
    homeFinal = homeFinalTotal;
    return `${awayFinal} - ${homeFinal}`;
   }
  scoreboard(getInningScore, inning, 9);
