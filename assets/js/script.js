// Define variables
var timeInterval;
var timeGiven = 120;
var secondsLeft = document.querySelector("seconds-left")
var mainContainer = document.querySelector(".main-container")
var quizContent;
var quizDone;

// Define Questions
var questions = [
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