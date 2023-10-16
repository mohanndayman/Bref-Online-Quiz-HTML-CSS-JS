// script.js 

let score=0;
let questions = [ 
	{ 
		prompt: `Which of the following keywords is used to define a variable in Javascript?`, 
		options: [ 
			"var", 
			"let", 
			"Both of 1 & 2", 
			"None Of Above",
		], 
		answer: "Both of 1 & 2", 
	}, 

	{ 
		prompt: `How do you call a 
				function named 
				myFunction?`, 
		options: [ 
			"call myFunction()", 
			"myFunction()", 
			"call function myFunction", 
			"Call.myFunction", 
		], 
		answer: "myFunction()", 
	}, 

	{ 
		prompt: `How does a for loop 
				start?`, 
		options: [ 
			"for (i = 0; i <= 5; i++)", 
			"for (i = 0; i <= 5)", 
			"for i = 1 to 5", 
			" for (i <= 5; i++)", 
		], 
		answer: "for (i = 0; i <= 5; i++)", 
	}, 

	{ 
		prompt: `In JavaScript, which 
				of the following is 
				a logical operator?`, 
		options: ["|", "&&", "%", "/"], 
		answer: "&&", 
	}, 

	{ 
		prompt: `A named element in a 
				JavaScript program that 
				is used to store and 
				retrieve data is a _____.`, 
		options: [ 
			"method", 
			"assignment operator", 
			"letiable", 
			"string", 
		], 
		answer: "letiable", 
	}, 
]; 

// Get Dom Elements 

let questionsEl = document.querySelector( "#questions"); 
let timerEl = document.querySelector("#timer"); 
let choicesEl = document.querySelector("#options"); 
let startBtn = document.querySelector("#start"); 
let hom=document.getElementById('home');

// Quiz's initial state 
let currentQuestionIndex = 0; 
let time = questions.length * 15; 
let timerId; 
// Start quiz and hide frontpage 

function quizStart() { 
	hom.style.display='none';
	timerId = setInterval( clockTick, 1000 ); 
	timerEl.textContent = time; 
	let landingScreenEl = document.getElementById( "start-screen"); 
	landingScreenEl.setAttribute( "class", "hide"); 
	questionsEl.removeAttribute( "class"); 
	getQuestion(); 
} 

// Loop through array of questions and 
// Answers and create list with buttons 
function getQuestion() { 
	let currentQuestion = questions[currentQuestionIndex]; 
	let promptEl = document.getElementById( "question-words"); 
	promptEl.textContent = currentQuestion.prompt; 
	choicesEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (choice, i) { 
			let choiceBtn = document.createElement( "button"); 
			choiceBtn.setAttribute( "value", choice ); 
			choiceBtn.textContent = i + 1 + ". " + choice; 
			choiceBtn.onclick = questionClick; 
			choicesEl.appendChild( choiceBtn ); 
		} 
	); 
} 

// Check for right answers and deduct 
// Time for wrong answer, go to next question
function questionClick() {  

	if ( this.value == questions[currentQuestionIndex] .answer ) {
		++score;
	}
	sessionStorage.setItem(`answer${[currentQuestionIndex]}`,this.value) ;
	 

	currentQuestionIndex++; 
	if ( currentQuestionIndex === questions.length ) { 
		quizEnd(); 
	} else { 
		getQuestion(); 
	} 
} 

// End quiz by hiding questions, 
// Stop timer and show final score 

function quizEnd() {
	hom.style.display='inherit';
    clearInterval(timerId);
    let endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = score;
    questionsEl.setAttribute("class", "hide");

  }

// End quiz if timer reaches 0 

function clockTick() { 
    time--; 
    timerEl.textContent = time; 
    if (time <= 0) { 
        quizEnd(); 
    } 
} 


startBtn.onclick = quizStart;
function show() {
	const tab =window.open('show-answer-for-js.html', '_blank');
}
