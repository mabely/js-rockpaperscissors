var choices = ["rock", "paper", "scissors"];

var played = 0;
var won = 0;
var lost = 0;
var draw = 0;
var selected = '';
var verdict = '';

// Listen for the button clicks
$('.buttons').click(function(event){
  var play_you = this.getAttribute("value");
  console.log(play_you);
  $('#play_you').text(play_you);
  var play_machine = computer_move();
  compare(play_you, play_machine);
  score(verdict);
});

function holddown(play_you){
  if (play_you == 'rock'){
    $('#rock').css('background-color', 'red');
  }
  else if (play_you == 'paper'){
    $('#paper').css('background-color', 'red');
  }
  else {
    $('#scissors').css('background-color', 'red');
  }
}

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

// **********COMPUTER MOVE FUNCTION**********

function computer_move(){
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;
  console.log('move: ' + play_machine);

  play_machine = choices[play_machine];
  $('#play_machine').text(play_machine);
  console.log('move: ' + play_machine);
  return play_machine;
}

// **********COMPARE FUNCTION TO REACH VERDICT**********

function compare(play_you, play_machine){

  if (play_you == play_machine) {
    verdict = 'draw';
  }

  else if ((play_you == 'paper') && (play_machine =='rock')) {
    verdict = 'win';
  }

  else if ((play_you == 'rock') && (play_machine =='scissors')) {
    verdict = 'win';
  }

  else if ((play_you == 'scissors') && (play_machine =='paper')) {
    verdict = 'win';
  }

  else {
    verdict = 'lose';
  }

  console.log(verdict);
  $('#verdict').text("you " + verdict);
  $('#verdict').show();
  played++;
  $('#game_played').text(played);
  }

// **********SWITCH STATEMENT FOR ADDING TO WON, LOST, DRAW, PLAYED**********

function score(verdict){
  switch (verdict) {
    case 'win':
    won++;
    $('#game_won').text(won);
    break;
  case 'lose':
    lost++;
    $('#game_lost').text(lost);
    break;
  case 'draw':
    draw++;
    $('#game_draw').text(draw);
    break;
  }
}
