const startButton = document.getElementById('start-button')
const firstAnswer = document.getElementById('answerOne')
const secondAnswer = document.getElementById('answerTwo')
const thirdAnswer = document.getElementById('answerThree')
let perro, i = 0;
let respuestas = [];

startButton.addEventListener('click', pressStart)
firstAnswer.addEventListener('click', imprimirOne)
secondAnswer.addEventListener('click', imprimirTwo)
thirdAnswer.addEventListener('click', imprimirThree)

function pressStart() {
    document.getElementById('quiz-box').style.visibility='visible';
    document.getElementById('controls').style.visibility='hidden';
    fillInfo();
    
}

function fillInfo() {
    if (i >= 0 && i < questions.length) {
    getQuestions();
    } else {
        document.getElementById('quiz-box').style.visibility='hidden';
    }
}

function imprimirOne() {
    respuestas[i] = document.getElementById('answerOne').innerText;
    getAnswer();
    i++;
    fillInfo();
}

function imprimirTwo() {
    respuestas[i] = document.getElementById('answerTwo').innerText;
    getAnswer();
    i++;
    fillInfo();
}

function imprimirThree() {
    respuestas[i] = document.getElementById('answerThree').innerText;
    getAnswer();
    i++;
    fillInfo();
}

const questions = [
    {
        quest: "Where is the biggest waterfall in the world?",
        ansOne: "Bolivar State, Venezuela",
        ansTwo: "California, United States",
        ansThree: "Molokai, Hawaii",
        ansRight: "Bolivar State, Venezuela"
    },
    {
        quest: "Which language has the most native speakers?",
        ansOne: "English",
        ansTwo: "Hindi",
        ansThree: "Spanish",
        ansRight: "Spanish"
    },
    {
        quest: "Which planet in the Milky Way is the hottest",
        ansOne: "Mercury",
        ansTwo: "Venus",
        ansThree: "Mars",
        ansRight: "Venus"
    }
]

function getQuestions() {
    document.getElementById('question').innerText = questions[i].quest;
    document.getElementById('answerOne').innerText = questions[i].ansOne;
    document.getElementById('answerTwo').innerText = questions[i].ansTwo;
    document.getElementById('answerThree').innerText = questions[i].ansThree;
}

function getAnswer() {
    if(respuestas[i] == questions[i].ansRight) {
        alert("YaRight!!!");
    } else {
        alert("YaWronggg!!!")
    }
}