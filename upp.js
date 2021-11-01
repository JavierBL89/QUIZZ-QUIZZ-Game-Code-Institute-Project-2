
document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");
for(let button of buttons){
    button.addEventListener("click", function(){
        if(this.getAttribute("data-type")=== "submit"){
            checkAnswer();
        }else{
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    })
}

document.getElementById("answer-box").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        checkAnswer()
    }
});
    runGame("addition");
});


/**
 * The main game "loop", called whan the script is first loade
 * and after the user's answer has ben procceded
 */
function runGame(gameType){

    document.getElementById("answer-box").value = "";

  let num1 = Math.floor(Math.random() *25) + 1;
  let num2 = Math.floor(Math.random() *25) + 1;

//   DISPLAY QUESTION
  if(gameType === "addition"){
      displayAdditionQuestion(num1, num2);
      calculateCorrectAnswer();
  }else if(gameType === "multiply"){
      displayMultiplyQuestion(num1, num2);
      calculateCorrectAnswer();
  }else if(gameType === "divide"){
    displayDivideQuestion(num1, num2);
    calculateCorrectAnswer();
}else if(gameType === "substract"){
displaySubtractQuestion(num1, num2);
calculateCorrectAnswer();
}else{
      alert(`Unknown game type: ${gameType}`);
      throw `Unknown game type: ${gameType}. Aborting!`;
  }

}

/**
 * 1- OPTION- Check userAnserw against the returned calculation from calculateCorrectAnswer()
 * 2- OPTION Check the returned array from  calculateCorrectAnswer()
 */
function checkAnswer(){
    let userAnswer = document.getElementById("answer-box").value;
        let result =  calculateCorrectAnswer();
        // 1- OPTION

        // if(userAnswer === result){
        //     alert(userAnswer + " es igual a " + result);
        // }else{
        //     alert(`bad luck, your answer ${userAnswer} is not correct, the correct answer is ${result[0]}`);
        // }

    // 2- OPTION (this allows us to run the game again
    // by calling the function and passing in the second value of the array as bellow)

    let isCorrect = userAnswer === result[0];
    if(isCorrect){
        alert("congartulations," + userAnswer + " is equal to" + result[0]);
        incrementScore();
    }else{
        alert(`bad luck, your answer "${userAnswer}" is not correct, the correct answer is ${result[0]}`);
        incrementWrongAnswer();
    }
    // document.getElementById("answer-box").innerHTML =reset();
    runGame(result[1]);
}

/**
 * Gets the operands and opertator
 * directly from the DOM
 * Aand returns the correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator=  document.getElementById("operator").textContent;

    if(operator === "+"){
        // console.log( [operand1 + operand2, "addition"]);

         // 1- OPTION
        //  return operand1 + operand2;

         // 2- OPTION

        return [operand1 + operand2, "addition"];

    }else if(operator === "x"){
        return [operand1 * operand2, "multiply"];
    }else if(operator == "-"){
        return [operand1 - opeerand2, "subtract"]
    }else if(operator == "/"){
        return [operand1 / operand2, "divide"]
    }else{
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}`;
    }

}

/**
 * Gets current score from the DOM and increments it by 1
 */
function incrementScore(){
    let currentScore = parseInt(document.getElementById("score").innerText);

    // innerText NUMBERS CAN'T BE TARGGERED SO
    // WE NEED TO GET THE HTML AGAIN AND RESET IT AS A NUMBER
    document.getElementById("score").innerText = currentScore++;
}


/**
 * Gets the current incorrect score from the DOM adn increments it by 1
 */
function incrementWrongAnswer(){
    let currentScore = parseInt(document.getElementById("incorrect").innerText);

    // innerText NUMBERS CAN'T BE TARGGERED SO
    // WE NEED TO GET THE HTML AGAIN AND RESET IT AS A NUMBER
    document.getElementById("incorrect").innerText = ++currentScore;
}


function displayAdditionQuestion(operand1, operand2){

    document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+" ;
}


function displaySubtractQuestion(operand1, operand2){
    document.getElementById("operand1").innerText = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").innerText = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-" ;

}

/**
 * Gets the random numbers and populate the into DOM
 */
function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x" ;


}

function displayDivideQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/" ;
}
