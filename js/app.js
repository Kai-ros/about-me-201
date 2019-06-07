'use strict';

/*
  1. Is Brandon a gamer?
  Answer Yes
  2. Can Brandon sing?
  Answer No
  3. Does Brandon lift weights?
  Answer Yes
  4. Does Brandon eat licorice?
  Answer No
  5. Is Brandon concerned with popularity?
  Answer No
*/ 

var correctAnswersTally = 0;
var answer = false;
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
  'Hrrmm...that is not accurate.',
  'Are you certain that you know of the being, Brandon...?',
  'Are you a fool?',
  'You are not a particularly sharp entity are you?',
  'To be so wrong...how can such a thing even draw breath? Much less exist?'
];

// var nonsenseAlertMessages = [
//   'This is not the arena for frivolity...',
//   'Your path is one of folly and error.',
//   'You test the patience of powers cosmic...',
//   'I will sacrifice you to the ravening pit for your impudence.',
//   'Your soul will agony long after the stars have all grown cold.'
// ];

// Console log messages
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

var nonsenseConsoleMessage = 'The entity thinks itself funny. It believes it knows humor. The Eldritch Truth will teach it of humor.';

var htmlTargets = [
  'query1Answer',
  'query2Answer',
  'query3Answer',
  'query4Answer',
  'query5Answer'
];

var username;
var greetings = function(){
  username = prompt('Tell us your name.');
};

greetings();


alert(`Well met, ${username}. I will now pose you with queries about the being known as Brandon, as is my grand purview. You will respond in either an affirmative or a negative, in the form of a "yes" or a "no", "y" and "n" may also be substituted for either of these choices. Your ultimate worth on the cosmic stage shall be weighed, measured, and decided...`);


var initialFiveQuestions = function(){
  for (var i = 0; i < promptQueries.length; i++) {
    promptReplies = prompt(promptQueries[i]).toLowerCase();
    userAnswers.push(promptReplies);
    // document.getElementById(htmlTargets[i]).innerHTML = userAnswers[i];
    // Check replies to the queries
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
}

initialFiveQuestions();


var userGuess;

var dreadedQuestionSix = function(){
  for(var numGuesses = 0; numGuesses < 4; numGuesses++)
  {
    userGuess = prompt('What number is the sign of the beast?');
    console.log(userGuess);
    console.log(666);
    if(userGuess === 666)
    {

      alert('Great guess!');
      correctAnswersTally++;
      break;

    } 
    else if(userGuess > 666)
    {
      alert('Too high! Guess again.');
      continue;
    } 
    else if(userGuess < 666)
    {
      alert('Too low! Guess again.');
      continue;
    }
  }
}

dreadedQuestionSix();


// var infamousQuestionSeven = function(){
//   var elderGods = ['Cthulu', 'Oryx', 'Yog-Sothoth', 'Azathoth', 'The Blackness from the Stars'];
//   var godResponse = prompt('Tell me the name of an Elder God.');

//   for(userGuess = 0; userGuess < 6; userGuess++){
//     for(var i = 0; i < 5; i++){
//       if(userGuess === elderGods[i]){
//         alert('great response.');
//         break;
//       }
//     }
//     alert('WRONG, try again.');
//   }
// }

// infamousQuestionSeven();

