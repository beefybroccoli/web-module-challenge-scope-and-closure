/* ⚾️⚾️⚾️ Task 6: scoreboard() using closure⚾️⚾️⚾️
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

// function helper_inning () {
//   return Math.floor(Math.random()*3);
// } 

// function helper_get_InningScore(helper_inning){
//   return {"Away": helper_inning(),"Home":helper_inning()}
// }

// function helper_update_score(vscore_board, current_score){
//   score_board.home += current_score.home;
//   score_board.Away += current_score.Away
// }

function gameboard(input_repetition){
  let score_board = {"Away":0,"Home":0};
  let current_score;
  let array_history = [];
  let index;

  const helper_inning = () => Math.floor(Math.random()*3);

  const helper_helper_get_InningScore = () => {
    return {"Away": helper_inning(),"Home":helper_inning()}; 
  }

  const helper_update_score = () => {
    score_board.Home += current_score.Home;
    score_board.Away += current_score.Away;
  }

  const helper_update_array_history = () =>  {
    array_history.push(`Inning ${index + 1}: Away ${current_score.Away} -  Home ${current_score.Home}`);
  }

  const helper_push_final_statement = () => {

    if (score_board.Away === score_board.Home) {
      array_history.push( "This game will require extra innings: " + `Away ${score_board.Away} - Home ${score_board.Home}`);
    } else{
      array_history.push("Final Score: " + `Away ${score_board.Away} - Home ${score_board.Home}`);
    }
  
  }

  for (index = 0; index < input_repetition;index++){

    //generate a score
    current_score = helper_helper_get_InningScore();

    //update score_board
    helper_update_score();

    //update array_history
    helper_update_array_history();
  }
  
  helper_push_final_statement();

  console.log(array_history)

}//end gameboard

gameboard(10);