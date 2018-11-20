var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;

// Listen for the button clicks
$('button').click(function(event){
  var play_you = this.getAttribute("value");
  console.log(play_you);
  $('#play_you').text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
  // score();
});

// $('#rock').click(function(event) {
//   var move_you = 'rock';
//   $('#play_you').text(move_you);
//   var play_machine = computer_move();
//   compare(play_you, play_machine);
// });
//
// $('#paper').click(function(event){
//   var move_you = 'paper';
//   $('#play_you').text(move_you);
//   var play_machine = computer_move();
//   compare(play_you, play_machine);
// });
//
// $('#scissors').click(function(event){
//   var move_you = 'scissors';
//   $('#play_you').text(move_you);
//   var play_machine = computer_move();
//   compare(play_you, play_machine);
// });

function computer_move(){
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;
  console.log('move: ' + play_machine);

  play_machine = choices[play_machine];
  $('#play_machine').text(play_machine);
  console.log('move: ' + play_machine);
}

// **********COMPARE FUNCTION TO REACH VERDICT**********
function compare(you, machine){
  var verdict = '';

  if (you == machine) {
    verdict = 'draw';
  }

  else if ((you == 'paper') && (machine =='rock')) {
    verdict = 'win';
  }

  else if ((you == 'rock') && (machine =='scissors')) {
    verdict = 'win';
  }

  else if ((you == 'scissors') && (machine =='paper')) {
    verdict = 'win';
  }

  $('#verdict').text(verdict);
  played++;
  $('#game_played').text(played);
}


// **********SWITCH STATEMENT FOR ADDING TO WON, LOST, DRAW, PLAYED**********
switch (verdict) {
  case 'win':
  won++;
  $('#won').text(won);
  break;
case 'lose':
  lost++;
  $('#lost').text(lost);
  break;
case 'draw':
  draw++;
  $('#draw').text(draw);
  break;
}

// ?????MAKE THIS PRINT?????
