'use strict';


var correctAnswersTally = 0;
var correctAnswers = ['y', 'n', 'y', 'n', 'n'];
var promptReplies;
var userAnswers = [];

var promptQueries = [
  'Is Brandon a gamer boi?',
  'Do the songbirds envy Brandon?',
  'Does Brandon even lift...brah?',
  'Does Brandon ingest of the hated substance of the pit...LICORICE!?',
  'Is Brandon preoccupied by the desires of the masses?'
];

var correctAlertMessages = [
  'Accurate.',
  'Well done.',
  'Indeed.',
  'This is in alignment...',
  'You speak truly.'
];

var incorrectAlertMessages = [
  'This is not the arena for frivolity...',
  'Are you certain that you know of the being, Brandon...?',
  'Your path is one of folly and error.',
  'I will sacrifice you to the ravening pit for your impudence.',
  'To be so wrong...how can such a thing even draw breath? Much less exist?'
];

var correctConsoleLogMessages = [
  'The entity responded to the first query in the affirmative. Correct.',
  'The entity responded to the second query in the negative. Correct.',
  'The entity responded to the third query in the affirmative. Correct.',
  'The entity responded to the fourth query in the negative. Correct.',
  'The entity responded to the fifth query in the negative. Correct.'
];

var incorrectConsoleLogMessages = [
  'The entity responded to the first query in the negative. Incorrect.',
  'The entity responded to the second query in the affirmative. Incorrect.',
  'The entity responded to the third query in the negative. Incorrect.',
  'The entity responded to the fourth query in the affirmative. Incorrect.',
  'The entity responded to the fifth query in the affirmative. Incorrect.'
];


var htmlTargets = [
  'query1Answer',
  'query2Answer',
  'query3Answer',
  'query4Answer',
  'query5Answer'
];

var userName;
var greetings = function(){
  userName = prompt('Tell us your name.');
};

greetings();

var initialFiveQuestions = function(){

  alert(`Well met, ${userName}. I will now pose you with queries about the being known as Brandon, as is my grand purview. You will respond in either an affirmative or a negative, in the form of a "yes" or a "no", "y" and "n" may also be substituted for either of these choices. Your ultimate worth on the cosmic stage shall be weighed, measured, and decided...`);

  for (var i = 0; i < promptQueries.length; i++) {

    promptReplies = prompt(promptQueries[i]).toLowerCase();
    userAnswers.push(promptReplies);
    document.getElementById(htmlTargets[i]).innerHTML = userAnswers[i];
    console.log(userAnswers);

    if (userAnswers[i] === correctAnswers[i]) {
      // If they answer correctly
      alert(correctAlertMessages[i]);
      console.log(correctConsoleLogMessages[i]);
      correctAnswersTally++;
      continue;
    }
    // If they answer incorrectly.
    alert(incorrectAlertMessages[i]);
    console.log(incorrectConsoleLogMessages[i]);

  }
};

initialFiveQuestions();

var userGuess;

var dreadedQuestionSix = function(){

  alert(`Now we shall play a game of a different sort, ${userName}. I will ask you a question to suppose a number, you will have 4 tries to guess the answer correctly. `);

  for(var numGuesses = 0; numGuesses < 4; numGuesses++)
  {
    userGuess = prompt('What number is the sign of the beast?');
    var scrubbedUserGuess = parseInt(userGuess);
    if(scrubbedUserGuess === 666) {
      alert('Great guess!');
      correctAnswersTally++;
      break;
    } 
    else if(scrubbedUserGuess > 666) {
      alert('Too high! Guess again.');
      continue;
    } 
    else if(scrubbedUserGuess < 666) {
      alert('Too low! Guess again.');
      continue;
    } 
    else {
      alert('That answer won\'t do at all.');
      continue;   
    }
  }

};

dreadedQuestionSix();


var infamousQuestionSeven = function(){
  var elderGods = ['Cthulu', 'Oryx', 'Yog-Sothoth', 'Azathoth', 'The Blackness from the Stars'];

  loop1:
  for(var i = 0; i < 6; i++){

    var namedGods = prompt(`The great game advances ${userName}. Now you will tell me the name of an Elder God.`);

    loop2:
    for(var j = 0; j < 5; j++){

      if(namedGods === elderGods[j]){
        correctAnswersTally++;
        alert(`Excellent, ${userName}. You have gotten ` + correctAnswersTally + ' answers correct. Your fate remains undecided.');
        break loop1;
      }

    }
    alert('Unacceptable...');

  }
};

infamousQuestionSeven();

