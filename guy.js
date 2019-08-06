// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }

  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(c1score,c2score,c3score,c4score);

  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  //alert(maxscore);
  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Your style is Casual! Relaxing and being at ease is what is most important to you. Your're the chill laid back friend that everyone can count on and your style matches that.";
  }
  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    //alert("Got in here!");
    answerbox.innerHTML = "Your style is Whimsical! You're the energetic fun guy who hates being bored. You can be counted on for a good laugh. Your look is fun quirky and playful and doesn't usually follow the rules of fashion.";
    //alert("pause");
  }
  if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Your style is Sporty! Sweatpants and running shoes are your go to. You're never seen without your running shoes or a sweatband.";
  }
  if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Your style is Avant Garde! You're a trendsetter the first to do things and influence others. Your fashion choices are bold and innovative so people look to you when they need inspiration on what to wear and how to wear it.";
  }
  // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
  print("answer");
}

function showAnswer () {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}
