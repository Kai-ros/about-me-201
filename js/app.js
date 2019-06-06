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

var correctAnswers = 0;
var answerValidity = false;

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

var nonsenseAlertMessages = [
  'This is not the arena for frivolity...',
  'Your path is one of folly and error.',
  'You test the patience of powers cosmic...',
  'I will sacrifice you to the ravening pit for your impudence.',
  'Your soul will agony long after the stars have all grown cold.'
];

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


alert('Well met, entity. I will now pose you with queries about the being known as Brandon, as is my grand purview. You will respond in either an affirmative or a negative, in the form of a "yes" or a "no", "Y" and "n" may also be substituted for either of these choices. Your ultimate worth on the cosmic stage shall be weighed, measured, and decided...');


for (var i = 0; i < 5; i++) {
  var queryReplies = prompt(promptQueries[i]).toLowerCase();
  document.getElementById(htmlTargets[i]).innerHTML = queryReplies;

  // I would need a counter here to track which question is being shown to the page

  switch (queryReplies) {
  case  = 'yes', 'y':
    queryReplies = true;
    break;
  case 'no', 'n':
    queryReplies = true;
    break; 
  default:
    break;
  }
  
  // Check replies to the queries
  if (queryReplies === true) {

    // If they answer correctly
    alert(correctAlertMessages[i]);
    console.log(correctConsoleLogMessages[i]);
    correctAnswers++;
  }
  else if (queryReplies === false) {

    // If they answer incorrectly.
    alert(incorrectAlertMessages[i]);
    console.log(incorrectConsoleLogMessages[i]);
  }
  else {

    // If they do anything else.
    alert(nonsenseAlertMessages[i]);
    console.log(nonsenseConsoleMessage);
  }
}











