// Define variables
    // NavBar
     var timeLeft = document.getElementById("seconds-left");
     var clock = document.getElementById("timer");
     
    // Main
     var mainContainer = document.querySelector("main-container");

    // Start Screen
     var startSection = document.getElementById("start-section");
     var startBtn = document.getElementById("start-btn");

    // Question Screen
     var questionsSection = document.getElementById("questions-section");
     var questionTitle = document.getElementById("question-title");
     var choice1 = document.getElementById("choice1");
     var choice2 = document.getElementById("choice2");
     var choice3 = document.getElementById("choice3");
     var choice4 = document.getElementById("choice4");
     var showAnswer = document.getElementById("show-answer");

    // Results Screen
     var resultsSection = document.getElementById("results-section");
     var finalScore = document.getElementById("final-score");
     var initialsInput = document.getElementById("initials-input");
     var submitBtn = document.getElementById("submit-btn");

    //Highscores Screen
     var highscoresSection = document.getElementById("highscores-section");
     var listOfHighscores = document.getElementById("list-of-highscores");
     var tryAgainBtn = document.getElementById("try-again-btn");
     var clearAllBtn = document.getElementById("clear-all-btn");

// Other Used Variable
var timeInterval;
var timeGiven = 120;
var correctAnswer = 0;
var questionNumber = 0;
var questionIndex = 0;
var scoreResult;

// Define Questions
var allQuestions = [
    {
        question: "Who invented JavaScript?",
        choices: ["Bill Gates", "Steve Jobs", "Brendan Eich", "Ben Javascript"],
        answer: "Brendan Eich"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<head>", "<script>", "<meta>", "<link>"],
        answer: "<script"
    },
    {
        question: "An array always begins at an index of:",
        choices: ["0", "-1", "1", "null"],
        answer: "0"        
    },
    {
        question: "JavaScript is interpreted by:",
        choices: ["Computer", "Client", "Server", "HTML"],
        answer: "Client"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Numbers", "Alerts", "Booleans"],
        answer: "Alerts"
    },
    {
        question: " The 'function' and 'var' are known as:",
        choices: ["Keywords", "Data types", "Declaration statement", "Variables"],
        answer: "Declaration statement"
    },
    {
        question: " In JavaScript the x===y statement implies that:",
        choices: ["Both x and y are equal in value, type and reference address as well", 
                  "Both are x and y are equal in value only", 
                  "Both are equal in the value and data type", 
                  "Both are not same at all"],
        answer: "Both are equal in the value and data type"
    },
    {
        question: "What is the correct way to enter comment in a JavaScript?",
        choices: ["///", "<!-- -->", "/* */", "//"],
        answer: "//"
    },
    {
        question: "What kind of language is JavaScript?",
        choices: ["Application", "Scripting", "Programming", "Computer"],
        answer: "Scripting"
    },
    {
        question: "JavaScript is designed for following purpose?",
        choices: ["To add interactivity to HTML pages", "To style HTML pages", "To perform server side scripting", "To complicate coders life"],
        answer: "To add interactivity to HTML pages"
    }
]

// Functions based on Acceptance Criterias (listed to help create correct functions and work flow)

//When Start Button is clicked
startBtn.addEventListener("click", startNewQuiz);

//Then a timer starts 
function startNewQuiz () {
    timeGiven = 120;
    timeLeft.textContent = timeGiven;
    questionIndex = 0;
    initialsInput = "";

    startSection.style.display = "none";
    questionsSection.style.display = "flex";

    var startTimer = setInterval (function () {
        timeGiven--;
        timeLeft.textContent = timeGiven;
        if (timeGiven <= 0) {
            clearInterval(startTimer);
            if (questionIndex < allQuestions.length -1) {
                gameOver();
            }
        }
    }, 1000);

    showupQuiz();
}

//And Question Section shows up with multiple choice questions 
function showupQuiz () {
    nextQuestion ();
}

function nextQuestion () {
    questionTitle.textContent = allQuestions[questionIndex].question;
    choice1.textContent = allQuestions[questionIndex].choices[0];
    choice2.textContent = allQuestions[questionIndex].choices[1];
    choice3.textContent = allQuestions[questionIndex].choices[2];
    choice4.textContent = allQuestions[questionIndex].choices[3];
}

// Event Listeners for Choice Buttons
choice1.addEventListener("click", choose0);
choice2.addEventListener("click", choose1);
choice3.addEventListener("click", choose2);
choice4.addEventListener("click", choose3);

// Functions for Choice Buttons
function choose0 () {answerCheck(0);}
function choose1 () {answerCheck(1);}
function choose2 () {answerCheck(2);}
function choose3 () {answerCheck(3);}



//When question is answered, it shows if it was correct or wrong
function answerCheck (answer) {
    showAnswer.style.display = "block";
    // if correct answer, then add 1 score to final score
    if (allQuestions[questionIndex].answer === allQuestions[questionIndex].choices[answer]){
        correctAnswer++;
        showAnswer.textContent = "YES! Correct!"
    } 
    // if wrong then deduct 10 second from time left
    else {
        timeGiven -=10;
        timeLeft.textContent = timeGiven;
        showAnswer.textContent = "OOPS...Wrong! The correct answer is: " + allQuestions[questionIndex].answer;
    }
    //then next question is asked
    questionIndex++;
    if (questionIndex < allQuestions.length){
        nextQuestion();
    }
    //if no more questions is left, then run Game Over function
    else {
        gameOver();
    }
}
// Game Over function 
function gameOver () {
    questionsSection.style.display = "none";
    resultsSection.style.display = "flex";
    //show final score of correct answers
    finalScore.textContent = correctAnswer; 
    //stop the timer
    clock.textContent = "~ Game Over ~"
}

// Enter initials and store highscore

