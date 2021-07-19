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




function mini_PC_gameboard(input_repetition){
  //variables for mini_PC_gameboard function
  var score_board = {"Away":0,"Home":0};
  var current_score;
  var array_history = [];
  var index;

  //generate random number, 0, 1 or 2
  const helper_inning = () => Math.floor(Math.random()*3);

  //crate score, i.e. {"Away":0,"Home":1}
  const helper_get_InningScore = () => {
    return {"Away": helper_inning(),"Home":helper_inning()}; 
  }//end helper_get_InningScore

  //update score_board
  const helper_update_score = () => {
    score_board.Home += current_score.Home;
    score_board.Away += current_score.Away;
  }//helper_update_score

  //update array_history
  // [
  //   "Inning 1: Away 1 - Home 2", 
  //   "Inning 2: Away 2 - Home 1",
  //   "Inning 3: Away 0 - Home 2", 
  // ]
  const helper_update_array_history = () =>  {
    array_history.push(`Inning ${index + 1}: Away ${current_score.Away} -  Home ${current_score.Home}`);
  }//end helper_update_array_history

  const helper_push_final_statement = () => {

    //push below statement into array_history
    //"This game will require extra innings: Away 10 - Home 10"
    if (score_board.Away === score_board.Home) {
      array_history.push( "This game will require extra innings: " + `Away ${score_board.Away} - Home ${score_board.Home}`);
    }//end if
    //push below statement into array_history
    //"Final Score: Away 11 - Home 12" 
    else{
      array_history.push("Final Score: " + `Away ${score_board.Away} - Home ${score_board.Home}`);
    }//end else
  }//end helper_push_final_statement

  for (index = 0; index < input_repetition;index++){

    //generate a score
    current_score = helper_get_InningScore();

    //update score_board
    helper_update_score();

    //update array_history
    helper_update_array_history();
  }
  
  //push final statement into array_history
  //i.e. "This game will require extra innings: Away 10 - Home 10"
  //i.e. "Final Score: Away 11 - Home 12" 
  helper_push_final_statement();

  console.log(array_history)

}//end gameboard

mini_PC_gameboard(0);console.log();
mini_PC_gameboard(5);console.log();
mini_PC_gameboard(10);console.log();

