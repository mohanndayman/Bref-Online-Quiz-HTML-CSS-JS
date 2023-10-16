let score=0;
let questions = [ 
	{ 
		prompt: `What does CSS stand for?`, 
		
			options: [ 
				"Computer Style Sheets",
				"Cascading Style Sheets",
				"Creative Style Sheets",
				"Colorful Style Sheets",
		], 
		answer: "Cascading Style Sheets", 
	}, 

	{ 
		prompt: `How can we select an element with a specific ID in CSS?`,
		options: [ 
			"'#'",
            "'.'",
            "'^'",
            "None of above",
		], 
		answer:".", 
	}, 

	{ 
		prompt: `Which HTML attribute is used to define inline styles?`,
		options: [ 
			"class",
            "font",
             "style",
             "styles",
		], 
		answer: "class", 
	}, 

	{ 
		prompt: `How do you insert a comment in a CSS file?`,

		options: ["//this ia a comment//",
		"'this ia a comment*/",
		"//this ia a comment",
		"/*this ia a comment*/",], 
		answer: "/*this ia a comment*/", 
	}, 

	{ 
		prompt: `Which property is used to change the background color`, 
		options: [ 
			"background-color",
			"bgcolor",
			"color",
			"else",
		], 
		answer: "background-color", 
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
	const tab =window.open('show-answers-css.html', '_blank');
}