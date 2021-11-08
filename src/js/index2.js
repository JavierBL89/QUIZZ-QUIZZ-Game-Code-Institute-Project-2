const welcomeWraper = document.getElementById("welcome-wraper");
const gameWraper = document.getElementById("game-wraper");
var score = document.getElementById("score");
var correctAnswers = document.getElementById("correct");
const subjectsWraper = document.getElementById("subjects-wraper");
const modalSubjectsPanel = document.getElementById("modal-subjects-panel");
const status = document.getElementById("level-status");
const endOfGamePanel = document.getElementById("end-of-game");
const reStartButton = document.getElementById("button-restart-container");

document.addEventListener("DOMContentLoaded", function() {

  /** ADDING EVENTLISTENER TO ALL BUTTONS BASED ON ATTRIBUTTES
   AND GET HOLD OF INNERHTML OF USERS ANSWERS */
  // runGameGeneral();
  const buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function() {

      if (this.getAttribute("class") === "modal-subject-1") {
        modalSubjectsPanel.style.display = "none";

        status.innerText;
        if (status === "1") {
          runGeneralLevel1();
        } else {
          runGeneralLevel2();
        }
      } else if (this.getAttribute("class") === "modal-subject-2") {

        status.innerText;
        if (status === "1") {
          runHistoryLevel1();
        } else {
          runHistoryLevel2();
        }
        modalSubjectsPanel.style.display = "none";

      } else if (this.getAttribute("class") === "modal-subject-3") {
        alert("puta");
        welcomeWraper.classList.add("hidden");
        gameWraper.style.display = "block";
        modalSubjectsPanel.style.display = "none";

      } else if (this.getAttribute("class") === "modal-subject-4") {
        alert("puta");
        welcomeWraper.classList.add("hidden");
        gameWraper.style.display = "block";
        modalSubjectsPanel.style.display = "none";

      } else if (this.getAttribute("id") === "answer1") {
        console.log(this.innerText);
        checkAnswer(this);
      } else if (this.getAttribute("id") === "answer2") {
        console.log(this.innerText);
        checkAnswer(this);
      } else if (this.getAttribute("id") === "answer3") {
        console.log(this.innerText);
        checkAnswer(this);
      } else if (this.getAttribute("id") === "comodin1") {
        this.style.display = "none";
        setNextQuestion();
      } else if (this.getAttribute("id") === "comodin2") {
        clearInterval(timeInterval)
        modalSubjectsPanel.style.display = "block";
        this.style.display = "none";
      } else if (this.getAttribute("id") === "comodin3") {
        this.style.display = "none";
      } else if (this.getAttribute("id") === "restart-game") {
        reStartGame();
      } else {
        // alert("Unkown atribute");
        // throw `Unkown atribute}`;
      }
    });
  }
});

function reStartGame() {
  endOfGamePanel.style.display = "none";
  reStartButton.style.display = "none";

  welcomeWraper.style.display = "grid";
  score.innerText = "0";
  correctAnswers.innerText = "0";

}



/** GETTTING HOLD OF PLAYER NAME AND PASSING IN
THE BUTTON ELEMENT SELECTED TO START THE GAME
WITH THE SUBJECT CHOOSEN **/

var startGameInterval;
var startGameCountDown = 4;

function handleSumit(subject) {
  //without this event.prevent the whole function does not work
  event.preventDefault();



  // get the player name and set it into the panel score
  var playerName = document.getElementById("player-name-input");
  document.getElementById("player-name").innerText = playerName.value
  console.log(subject);

startCountDown(subject);

}
/** HERE I GET THE BUTTON CLICKED VALUE TO RUN THE GAME
WITH THE SUBJECT CHOOSEN! */
function startCountDown(subject) {

  startGameCountDown = 4;
  clearInterval(startGameInterval);

  startGameInterval = setInterval(() => {
    startGameCountDown--;
    subject.innerText = startGameCountDown;
    if (subject.innerText == 0 && subject.value === "GENERAL") {
      // console.log(currentPlayerScore);
      subject.innerHTML = "";
      welcomeWraper.style.display = "none";
      gameWraper.style.display = "block";
      clearInterval(startGameInterval)
      runGeneralLevel1();
    } else if (subject.innerText == 0 && subject.value === "HISTORY") {
      // console.log(currentPlayerScore);
      subject.innerHTML = "";
      welcomeWraper.style.display = "none";
      gameWraper.style.display = "block";
      clearInterval(startGameInterval)
      runHistoryLevel1();
    }
  }, 1000);

}

//CREATE UNDEFINED VALUES FOR SUFFLING QUESTIONS
var shuffleQuestions, currentQuestion
var currentQuestionIndex = 0;
var timeInterval;
var countDown = 10;

// array of correct answers
// const correctAnswers = ["Greece", "Jimmy Hendrix", "Germany", "Denmark","1963","1945","A tight rope", "Nevada","7", "James Cameron","Red","Fried chicken","Macadamia nuts","Michel Crichton","Dogs","Polska","A octagon","George Washington","Tasmania","Space Shuttle Columbia","Ireland","4","McDonald", "The London Bridge","Charles Lindbergh","Silver", "China", "Alexander Graham Bell", "Carl (Karl) Friedrich Benz","Thomas Edison","2 hours 40 minutes","Bethlehem","White House","George Washington","False", "South America","Spanish", "Inception", "Piña Colada", "Martini", "16"];


//****** RUN GENERAL KNOWLEDE QUESTIONS LEVEL 1 AND 2*******

function runGeneralLevel1() {
  // event.preventDefault();
  document.getElementById("subject").innerText = "General Knowledge";
  shuffleQuestions = generalLevel1.sort(() => Math.random() - .5)
  setNextQuestion();
}

function runGeneralLevel2() {
  // event.preventDefault();

  document.getElementById("subject").innerText = "General Knowledge";
  shuffleQuestions = generalLevel2.sort(() => Math.random() - .5)
  setNextQuestion();
}


/**** RUN HISTORY QUESTIONS LEVEL 1 AND 2 ************/

function runHistoryLevel1() {

  document.getElementById("subject").innerText = "History";
  shuffleQuestions = historyLevel1.sort(() => Math.random() - .5)
  setNextQuestion();
}

function runHistoryLevel2() {

  document.getElementById("subject").innerText = "General Knowledge";
  shuffleQuestions = historyLevel2.sort(() => Math.random() - .5)
  setNextQuestion();
}


function setNextQuestion() {
  currentQuestionIndex++
  showQuestions(shuffleQuestions[currentQuestionIndex]);

}


function showQuestions(question) {
  // console.log(generalLevel1.indexOf(question));
  // console.log(generalLevel2.indexOf(question));
  // console.log(question.correct);

  document.getElementById("question").textContent = question.question;
  document.getElementById("answer1").textContent = question.answer1;
  document.getElementById("answer2").textContent = question.answer2;
  document.getElementById("answer3").textContent = question.answer3;

  /* reset the timer to 10 for every print and
  clear any interval set, so the timer
  does not increment speed in every print */
  countDown = 10;
  clearInterval(timeInterval);
  document.getElementById("countDown").textContent = countDown;

  //set countdown interval
  timeInterval = setInterval(() => {
    countDown--;
    document.getElementById("countDown").textContent = countDown;
    if (document.getElementById("countDown").textContent == 0) {
      // console.log(currentPlayerScore);
      clearInterval(timeInterval);
      endOfGame();
      showFinalPlayerScore();
    }
  }, 1000);

}

// Function to get rid of the game panel
function endOfGame() {
  welcomeWraper.style.display = "none";
  gameWraper.style.display = "none";


  endOfGamePanel.style.display = "block";
  reStartButton.style.display = "block";

  //   const currentPlayer = {
  //       name: currentGamer,
  //       score: currentP,
  //       correctAnswers: corr
  //   };
  //   currentPlayerScore.push(currentPlayer);
  // console.log(currentPlayerScore);
}


// Creating the final panel html with the last player scores
finalPlayerScoreInner = `
  <table style="width:100%" class="table-1">
<tr>
<th>Player</th>
<th>Score</th>
<th>Correct answers</th>
</tr>
`;

/** Arrays of the current player scores
    and the best 3 players scores */

// const currentPlayerScore = [{
//     name: "Javier",
//     score: "3000",
//     correctAnswers: "15"
// }
// ];

const allPlayersScores = [{
    name: "Pablo",
    score: "5500",
    correctAnswers: "21"
  },
  {
    name: "Adrian",
    score: "10900",
    correctAnswers: "32"
  },
  {
    name: "Pablo",
    score: "8150",
    correctAnswers: "25"
  }
];

// Function to populate the current player score table
function showFinalPlayerScore() {

  let currentGamer = document.getElementById("player-name").textContent;
  let currentP = document.getElementById("score").textContent;
  let correct = document.getElementById("correct").textContent;
  const currentPlayerScore = [{
    name: currentGamer,
    score: currentP,
    correctAnswers: correct
  }];
  console.log(currentPlayerScore);
  // console.log(corr);
  // console.log(currentPlayerScore);
  /* Loping throught the current player scores
    and creating html table */
  currentPlayerScore.forEach(function(player) {

    // for(player of currentPlayerScore){
    let playerRow = `<tr class="tr">
    <td>${player.name}</td>
    <td>${player.score}</td>
    <td>${player.correctAnswers}</td>
    </tr>`;

    finalPlayerScoreInner += playerRow;
    // }
  })

  return finalPlayerScoreInner += `</table>`;
}
let finalPlayerScore = document.getElementById("final-player-score").innerHTML = showFinalPlayerScore();




// Creating the top players html table
let topPlayersPanel = `<table style="width:100%">
<tr>
<th>Player</th>
<th>Score</th>
<th>Correct answers</th>
</tr>`;

// Function to populate the top player table
function showTopPlayersScore() {

  for (topPlayer of allPlayersScores) {
    let topPlayersRow = `
    <tr>
    <td>${topPlayer.name}</td>
    <td>${topPlayer.score}</td>
    <td>${topPlayer.correctAnswers}</td>
    </tr>`;

    topPlayersPanel += topPlayersRow;
  }

  return topPlayersPanel += `</table>`
}
let topPlayerScorePanel = document.getElementById("top-players-container").innerHTML = showTopPlayersScore();


/***** CHECK PLAYER ANSWER AGAINST CURRENT QUESTION CORRECT ANSWER
DEFINED IN THE CONSTRUCTOR FUNCTION ****/
function checkAnswer(userAnswer) {

  // stops the countdown when user clicks an answer
  clearInterval(timeInterval);

  let currentQuestion = shuffleQuestions[currentQuestionIndex];
  const parentP = userAnswer.parentNode;

  if (userAnswer.innerText === currentQuestion.correct) {
    parentP.classList.add("right-answer");
    incrementScore();
    incrementCorrectAnswers()
  } else {
    parentP.classList.add("wrong-answer");
    incrementIncorrectAnswers();
  }


  setTimeout(function() {
    setNextQuestion()
  }, 1000);
  setTimeout(function() {
    parentP.classList.remove("right-answer")
    parentP.classList.remove("wrong-answer")
  }, 1000);


}


function heading(headingText) {
  document.getElementById("subject").innerText = headingText;
}

/********* MANIPULATING SCORES PANEL **********/
function incrementScore() {
  let initialScore = parseInt(score.innerText);
  var currentScore = score.innerText = initialScore + 300;

}

function incrementCorrectAnswers() {
  let initialNumber = parseInt(correctAnswers.innerText);
  var correctAnswersTrack = correctAnswers.innerText = ++initialNumber;

  if (correctAnswersTrack >= "5") {
    status.innerText = "2";
    // currentQuestionIndex = 0;
    runGeneralLevel2();
    // currentQuestionIndex--
  } else if (correctAnswersTrack >= "10") {
    alert("puta")
  }
}

function incrementIncorrectAnswers() {
  let initialNumber = parseInt(document.getElementById("incorrect").innerText);
  let incorrectAnswersTrack = document.getElementById("incorrect").innerText = ++initialNumber;
  // if(incorrectAnswersTrack >= 2){
  //   alert("game over")
  // }
}

/* CONSTRUCTOR FUNCTION FOR QUESTIONS
   AND QUESTIONS ARRAYS FOR GENERAL KNOWLEGE*/
var generalLevel1 = [];
var generalLevel2 = [];

function Question(question, answer1, answer2, answer3, correct) {
  this.question = question;
  this.answer1 = answer1,
    this.answer2 = answer2,
    this.answer3 = answer3,
    this.correct = correct
}
// General questions level1
var g1q1 = new Question("What does a funambulist walk on?", "A tight rope", "A cable", "A thread", "A tight rope");
var g1q2 = new Question("Which restaurant's mascot is a clawn?", "Burguer King", "KFC", "McDonald", "McDonald");
var g1q3 = new Question("What item is the werewolf most afraid of?", "A rock", "Garlic", "Silver", "Silver");
var g1q4 = new Question("TRUE OR FALSE - An eggplant is a vegetable.", "True", "False", "    ", "False");
var g1q5 = new Question("Where did the pineapple plant originate?", "Spain", "South America", "Canary Islands", "South America");
var g1q6 = new Question("What is the nationality of Picasso", "Italian", "Portuguese", "Spanish", "Spanish");
var g1q7 = new Question("Which film involves people entering other people’s dreams?", "Jurasic Park", "Inception", "Harry Potter", "Inception");
var g1q8 = new Question("What do you call a cocktail consisting of coconut milk, rum, and pineapple?", "Mojito", "Long Island", "Piña Colada", "Piña Colada");
var g1q9 = new Question("What is James Bond’s preferred drink of choice?", "Cocktails", "Brandy", "Martini", "Martini");
var g1q10 = new Question("How many balls are on a pool table at the start of a game?", "12", "16", "20", "16");

// var p2 = new Person("Jhon", 24);
generalLevel1.push(g1q1, g1q2, g1q3, g1q4, g1q5, g1q6, g1q7, g1q8, g1q9, g1q10);


// General questions level2
var g2q1 = new Question("Area 51 is located in which US state?", "Nevada", "California", "Arkansas", "Nevada");
var g2q2 = new Question("Which American president appears on a one-dollar bill?", "Bill Clinton", "George Washington", "Abraham Lincon", "George Washington");
var g2q3 = new Question("What geometric shape is generally used for stop signs?", "A circle", "A octagon", "A square", "A octagon");
var g2q4 = new Question("What is the name of Poland in Polish?", "Polsky", "Poluska", "Polska", "Polska");
var g2q5 = new Question("What is Cynophobia the fear of?", "Dogs", "Cats", "Birds", "Dogs");
var g2q6 = new Question("Who is the author of Jurrasic Park?", "J.R Tolkin", "Maria Keyes", "Michel Crichton", "Michel Crichton");
var g2q7 = new Question("What type of nuts are a Hawaiian staple?", "Cashews", "Hawaiian nuts", "Macadamia nuts", "Macadamia nuts");
var g2q8 = new Question("In the state of Georgia, it’s illegal to eat what with a fork?", "Fried chicken", "Burguers", "Chips", "Fried chicken");
var g2q9 = new Question("What was Marilyn Monroe’s natural hair color?", "Blonde", "Red", "Brown", "Red");
var g2q10 = new Question("Who directed Terminator 2: Judgment Day?", "Martin Scorsese", "Quentin Tarantino", "James Cameron", "James Cameron");
generalLevel2.push(g2q1, g2q2, g2q3, g2q4, g2q5, g2q6, g2q7, g2q8, g2q9, g2q10);


/****** HISTORY QUESTIONS ******/
const historyLevel1 = [];
const historyLevel2 = [];

// History questions level1
var h1q1 = new Question("Where did the Olympic Games originate?", "Barcelona", "Greece", "China", "Greece");
var h1q2 = new Question("Who invented the telephone?", "Amstrong", "Thomas Edison", "Alexander Graham Bell", "Alexander Graham Bell");
var h1q3 = new Question("Who was the first American President?.", "George Washington", "Abraham Lincon", "George Bush", "George Washington");
var h1q4 = new Question("Which country first used paper money?", "China", "USA", "Russia", "China");
var h1q5 = new Question("Which country gifted the Statue of Liberty to the USA?", "Germany", "England", "France", "France");
var h1q6 = new Question("In which town was Jesus born?", "Bethlehem", "Kiryat Atat", "Jerusalem", "Bethlehem");
var h1q7 = new Question("What building is on the back of the $20 bill?", "Pizza Tower", "Prado Museum", "White House", "White House");
var h1q8 = new Question("How long did it take for Titanic to sink?", "2 hours 40 minutes", "1 hour 50 minutes", "4 hours 10 minutes", "2 hours 40 minutes");
var h1q9 = new Question("Who invented the light bulb?", "Amstrong", "Thomas Edison", "Alexander Graham Bell", "Thomas Edison");
var h1q10 = new Question("Who invented the first car?", "Henry Ford", "Carl (Karl) Friedrich Benz", "Enzo Ferrari", "Carl (Karl) Friedrich Benz");

historyLevel1.push(h1q1, h1q2, h1q3, h1q4, h1q5, h1q6, h1q7, h1q8, h1q9, h1q10);
// const correctAnswers = ["Greece", "Jimmy Hendrix", "Germany", "Denmark","1963","1945","A tight rope", "7","Tasmania","Space Shuttle Columbia","Ireland","4","McDonald", "The London Bridge","Charles Lindbergh","Silver", "China", "Alexander Graham Bell", "Carl (Karl) Friedrich Benz","Thomas Edison","2 hours 40 minutes","Bethlehem","White House","George Washington","False", "South America","Spanish", "Inception", "Piña Colada", "Martini", "16"];

// History questions level2
var h2q1 = new Question("In which year did Hitler commit suicide?", "1938", "1940", "1945", "1945");
var h2q2 = new Question("In which year was John F. Kennedy assassinated?", "1963", "1968", "1989", "1963");
var h2q3 = new Question("Greenland was a colony of which country until 1981?", "Norway", "Denmark", "Holland", "Denmark");
var h2q4 = new Question("In 1927, who became the first man to fly solo and non-stop across the Atlantic?", "John Stramagere", "Amstrong", "Charles Lindbergh", "Charles Lindbergh");
var h2q5 = new Question("Which bridge was the first to be built across the River Thames in London?", "Millennium Bridge", "Blackfriars Bridge", "The London Bridge", "The London Bridge");
var h2q6 = new Question("How many U.S. presidents have been assassinated?", "4", "2", "5", "4");
var h2q7 = new Question("In which country did the Easter Rising take place in 1916?", "Ireland", "England", "Holland", "Ireland");
var h2q8 = new Question("What was the name of the first Space Shuttle to go into space?", "Apollo", "Space Shuttle Columbia", "Endeavour", "Space Shuttle Columbia");
var h2q9 = new Question("What is the modern name for Van Diemen’s Land?", "Tanzania", "Tasmania", "Transavania", "Tasmania");
var h2q10 = new Question("The ancient city of Rome was built on how many hills?", "7", "5", "3", "7");
historyLevel2.push(h2q1, h2q2, h2q3, h2q4, h2q5, h2q6, h2q7, h2q8, h2q9, h2q10);
