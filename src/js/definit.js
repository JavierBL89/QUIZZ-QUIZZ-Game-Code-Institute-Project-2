// const startGame = document.getElementsByClassName("subject-selected");



// let innerscoreBoxHtml = `
// <h4>Score: <spang id="score">${initialScore}</spang></h4>
// <h4>Missed score: <spang id="missed-score">${initialMissedScore}</spang></h4>
// <h4>Correct answers: <spang id="correct">${correctAnswersCounter}</spang></h4>
// <h4>Incorrect answers: <spang id="incorrect">${inorrectAnswersCounter}</spang></h4>`;
//
// let scoreBoxHtml = document.getElementById("score-box").innerHTML = innerscoreBoxHtml;

const players = []


var innerScoreBox = `<div id="score-box">`;

function handleSumit(event){
  event.preventDefault();

  let playerName =  document.getElementById("player-name");
// console.log(playerName.value);
// usernames.push(playerName.value);
// console.log(usernames);
// let userName = usernames;

  var playerNameRow = `<h3 id="player-name"></h3>`;
  innerScoreBox += playerNameRow;

}
innerScoreBox += `</div>`;
// console.log(innerScoreBox);
// innerScoreBox += `<h4>Score: <spang id="score">0</spang></h4>
// <h4>Missed score: <spang id="missed-score">0</spang></h4>
// <h4>Correct answers: <spang id="correct">0</spang></h4>
// <h4>Incorrect answers: <spang id="incorrect">0</spang></h4>
// </div>`;


document.getElementById("score-container").innerHTML = innerScoreBox;
console.log(innerScoreBox);




document.addEventListener("DOMContentLoaded", function(){

/** adding addEventListeners to all buttons
 and get hodl of the innerHTML user answer */
 // runGameGeneral();

 const subjects = document.getElementsByTagName("a");

for(let subject of subjects){
    subject.addEventListener("click", function(){

      if(this.getAttribute("id") === "general"){
        alert("puta")

        // heading(button.innerText)
        // runGameGeneral(event);
      }else if(this.getAttribute("id") === "football"){
        alert("puta");

      }else if(this.getAttribute("id") === "history"){
        alert("puta");

      }else if(this.getAttribute("id") === "geography"){
        alert("puta");

      } else{
          alert("Unkown atribute");
          throw `Unkown atribute}`;
        }
      });
  }

let choises = document.getElementsByTagName("button");

for(choise of choises){
  choise.addEventListener("click", function(){
    if(this.getAttribute("id") === "answer1"){
      console.log(this.innerText);
      checkAnswer(this);
    }else if(this.getAttribute("id") === "answer2"){
      console.log(this.innerText);
      checkAnswer(this);
    }else if(this.getAttribute("id") === "answer3"){
      console.log(this.innerText);
      checkAnswer(this);
    }else if(this.getAttribute("id") === "next-question"){
setNextQuestion();
}
  })
}
  });


  var shuffleQuestions, currentQuestion
  var currentQuestionIndex = 0;

  const correctAnswers = ["Maradona", "Jimmy Hendrix", "Germany", "A tight rope", "McDonald", "Silver", "False", "South America","Spanish", "Inception", "Piña Colada", "Martini", "16"];



  function runGameGeneral(){
// event.preventDefault();


    document.getElementById("subject").innerText = "General Knowledge";
    shuffleQuestions = generalLevel1.sort( () =>Math.random() - .5)
   setNextQuestion();

  }


  function setNextQuestion(){

    showQuestions(shuffleQuestions[currentQuestionIndex]);

  }

  function showQuestions(question){
console.log(generalLevel1.indexOf(question));
    let questionPanel = `
       <h4 id="question" value="">${question.question}</h4>
       <div id="answer-options" >
         <div class="answer-box"  >
         <button id="answer1" class="desable" type="button" >${question.answer1}</button>
         </div>
         <div class="answer-box" >
           <button id="answer2" class="desable" type="button" >${question.answer2}</button>
         </div>
         <div class="answer-box" type="button"  >
           <button id="answer3" class="desable" type="button">${question.answer3}</button>
         </div>
       </div>
    `;
  currentQuestionIndex++
  document.getElementById("main-container").innerHTML = questionPanel;
  }

function checkAnswer(userAnswer){

  const parentP = userAnswer.parentNode;
  if(correctAnswers.includes(userAnswer.innerText)){
    parentP.classList.add("right-answer")
  }else{
    parentP.classList.add("wrong-answer");

  }

setTimeout(function(){ setNextQuestion() }, 2000);}



function heading(headingText){
  document.getElementById("subject").innerText = headingText;
}

  // CONSTRUCTOR FUNCTION FOR QUESTIONS
    var generalLevel1 = [];
     function GeneralLevel1(question, answer1, answer2,answer3) {
        this.question = question;
        this.answer1 = answer1,
        this.answer2 = answer2,
        this.answer3 = answer3
     }
    // General questions level1
     var g1q1 = new GeneralLevel1("What does a funambulist walk on?","A tight rope", "A cable", "A thread");
     var g1q2 = new GeneralLevel1("Which restaurant's mascot is a clawn?","Burguer King", "KFC", "McDonald");
     var g1q3 = new GeneralLevel1("What item is the werewolf most afraid of?","A rock", "Garlic", "Silver");
     var g1q4 = new GeneralLevel1("TRUE OR FALSE - An eggplant is a vegetable.","True", "False");
     var g1q5 = new GeneralLevel1("Where did the pineapple plant originate?","Spain", "South America", "Canary Islands");
     var g1q6 = new GeneralLevel1("What is the nationality of Picasso","Italian", "Portuguese", "Spanish");
     var g1q7 = new GeneralLevel1("Which film involves people entering other people’s dreams?","Jurasic Park", "Inception", "Harry Potter");
     var g1q8 = new GeneralLevel1("What do you call a cocktail consisting of coconut milk, rum, and pineapple?","Mojito", "Long Island", "Piña Colada");
     var g1q9 = new GeneralLevel1("What is James Bond’s preferred drink of choice?","Cocktails", "Brandy", "Martini");
     var g1q10 = new GeneralLevel1("How many balls are on a pool table at the start of a game?","12", "16", "20");

     // var p2 = new Person("Jhon", 24);
     generalLevel1.push(g1q1, g1q2, g1q3, g1q4, g1q5, g1q6, g1q7, g1q8, g1q9, g1q10);


     var generalLevel2 = [];
      function GeneralLevel2(question, answer1, answer2, answer3, correct) {
         this.question = question;
         this.answer1 = answer1,
         this.answer2 = answer2,
         this.answer3 = answer3,
         this.correct = correct
      }

      var g2q1 = new GeneralLevel2("Area 51 is located in which US state?","Nevada", "California", "Arkansas", "Nevada");
      var g2q2 = new GeneralLevel2("Which American president appears on a one-dollar bill?","Bill Clinton", "George Washington", "Abraham Lincon", "George Washington");
      var g2q3 = new GeneralLevel2("What geometric shape is generally used for stop signs?","A circle", "A octagon", "A square", "A octagon");
      var g2q4 = new GeneralLevel2("What is the name of Poland in Polish?","Polsky", "Poluska", "Polska", "Polska");
      var g2q5 = new GeneralLevel2("What is Cynophobia the fear of?","Dogs", "Cats", "Birds", "Dogs");
      var g2q6 = new GeneralLevel2("Who is the author of Jurrasic Park?","J.R Tolkin", "Maria Keyes", "Michel Crichton", "Michel Crichton");
      var g2q7 = new GeneralLevel2("What type of nuts are a Hawaiian staple?","Cashews", "Hawaiian nuts", "Macadamia nuts", "Macadamia nuts");
      var g2q8 = new GeneralLevel2("In the state of Georgia, it’s illegal to eat what with a fork?","Fried chicken", "Burguers", "Chips", "Fried chicken");
      var g2q9 = new GeneralLevel2("What was Marilyn Monroe’s natural hair color?","Blonde", "Red", "Brown", "Red");
      var g2q10 = new GeneralLevel2("Who directed Terminator 2: Judgment Day?","Martin Scorsese", "Quentin Tarantino", "James Cameron", "James Cameron");
  generalLevel2.push(g2q1, g2q2, g2q3, g2q4, g2q5, g2q6, g2q7, g2q8, g2q9, g2q10);
