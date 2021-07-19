// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
// console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
      counter1 function is a closure, like a mini computer that remember count variable as its internal variable
      counter2 function is a function that reach out to get counter variable through mechanism of closure.
  
  2. Which of the two uses a closure? How can you tell?
      counter1 function is aclosure since it store counter variable as its internal state.
  
  3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
      counter1 code is better for isolated virtual mini computer, like VM.
      counter2 code is better for general purpose function and reusable code.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {return count++;}
} // end // counter1 code

const counter1 = counterMaker();
const miniComputer = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}// end counter2 code

// console.log("task 1 - " + "miniComputer() return " + miniComputer());
// console.log("task 1 - " + "miniComputer() return " + miniComputer());
// console.log("task 1 - " + "miniComputer() return " + miniComputer());
// console.log("task 1 - " + "counter2() return " + counter2())
// console.log("task 1 - " + "counter2() return " + counter2())
// console.log("task 1 - " + "counter2() return " + counter2())

/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
    return Math.floor(Math.random()*3);
}

// function test_task_2_inning(){
//   var counter_0 = 0;
//   var counter_1 = 0;
//   var counter_2 = 0;
//   var counter_3 = 0;
//   for (let i=0; i < 1000000;i++){
//     var temp = inning();
//     if (temp === 0) {counter_0++;}
//     else if (temp === 1) {counter_1++;}
//     else if (temp === 2) {counter_2++;}
//     else if (temp === 3) {counter_3++;}
//   }
//   console.log(`task 2 - counter_0 = ${counter_0}, counter_1 = ${counter_1}, counter_2 = ${counter_2}, counter_3 = ${counter_3}`);
// }

// test_task_2_inning();


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inning, number_of_innings){
  var result = {"Away":0, "Home":0};
  for (let i = 0; i < number_of_innings; i++){
    result.Home += inning();
    result.Away += inning();
  }
  console.log(result);
  return result;
}

console.log("task 3 - finalScore(inning, 100) return " + finalScore(inning, 100));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(inning) {
  return {"Away": inning(),"Home":inning()}
}

// console.log(`task 4 - getInningScore(inning) return ${getInningScore(inning)}`);
// for (let i = 0; i < 10; i++){
//   let temp = getInningScore(inning);
//   console.log(temp);
// }


/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(getInningScore,inning, number_of_innings) {
  var score_board = {"Away":0,"Home":0};
  var array_history = [];
  var var_index = 0;
  var temp_score;

  // 4. Return an array where each of it's index values equals a string stating the
  // Home and Away team's scores for each inning.  Not the cummulative score.
  for (let i = 0; i < number_of_innings; i++){
    
    temp_score = getInningScore(inning);
    
    array_history.push(`Inning ${i+1}: Away ${temp_score.Away} - Home ${temp_score.Home}`);

    score_board.Away += temp_score.Away;
    score_board.Home += temp_score.Home;
  }

  // 5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
  //    If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)

  //push below statement into array_history
  //"This game will require extra innings: Away 10 - Home 10"
  if (score_board.Away === score_board.Home) {
    array_history.push( "This game will require extra innings: " + `Away ${score_board.Away} - Home ${score_board.Home}`);
  } 
  //push below statement into array_history
  //"Final Score: Away 11 - Home 12" 
  else{
    array_history.push("Final Score: " + `Away ${score_board.Away} - Home ${score_board.Home}`);
  }

  console.log(array_history);

}

scoreboard(getInningScore,inning, 5);


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  // console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}