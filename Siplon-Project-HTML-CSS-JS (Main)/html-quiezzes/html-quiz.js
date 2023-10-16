let score=0;
let questions = [ 
	{ 
		prompt: `Why We Use <br> Element`, 
		
			options: [ 
			"To Make Text Bold", 
			"To Make Text Italic", 
			"To Add Breakline", 
			"To Create Horizontal Line", 
		], 
		answer: "To Add Breakline", 
	}, 

	{ 
		prompt: `Is <img> Element Has Attribute href?`,
		options: [ 
			"Yes", 
			"No Its For Anchor Tag <a>", 
			"All Elements Has This Attribute", 
			"Answer 1 And 3 Is Right", 
		], 
		answer:"No Its For Anchor Tag <a>", 
	}, 

	{ 
		prompt: `How Can We Make Element Text Bold?`,
		options: [ 
			"Putting It Inside <b> Tag", 
			"Putting It Inside <strong> Tag", 
			"Customizing It With Font-Weight Property In CSS", 
			" All Answers Is Right", 
		], 
		answer: "All Answers Is Right", 
	}, 

	{ 
		prompt: `In which part of the HTML metadata is contained?`,

		options: [
			"head tag", 
			"title tag",
			 "html tag", 
			 "body tag"
	], 
		answer: "head tag", 
	}, 

	{ 
		prompt: ` Which attribute specifies a unique alphanumeric identifier to be associated with an element?`, 
		options: [ 
			"type", 
			"article", 
			"id", 
			"class", 
		], 
		answer: "id", 
	}, 
]; 

// Get Dom Elements 

// script.js 



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
	const tab =window.open('show-ansers.html', '_blank');
}
