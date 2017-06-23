var numberCorrect = 0;
var numberIncorrect = 0;
var unanswered = 0;
var questionCount = 0;
var countdown = 21;

var questionObject = {
	"ques" : [
		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Louisa May Alcott"],
			},

		{ "question" : "Who is the protagonist in Fahrenheit 451?",
			"answer" : "Guy Montag",
			"choices" : ["Beatty", "Holden Caulfield", "Guy Montag", "Effie Trinket"],
			},

		{ "question" : "Who is famous elf from the Harry Potter series?",
			"answer" : "Dobby",
			"choices" : ["Gollum", "Dobby", "Legolas", "Link"],
			},

		{ "question" : "Which of the following is a famous symbol from 'The Great Gatsby'?",
			"answer" : "The green light",
			"choices" : ["The green light", "Red curtains", "A small mouse", "The pearl necklace"],
			},

		{ "question" : "Who dies in Little Women?",
			"answer" : "Beth March",
			"choices" : ["Amy March", "Meg March", "Jo March", "Beth March"],
			},

		{ "question" : "Which book did Hemingway publish most recently?",
			"answer" : "The Old Man and the Sea",
			"choices" : ["The Old Man and the Sea", "The Sun Also Rises", "The Garden of Eden", "A Farewell to Arms"],
			},

		{ "question" : "Which book was a bestseller in 2016?",
			"answer" : "milk and honey",
			"choices" : ["Mockingjay", "Before I Fall", "Bossypants", "milk and honey"],
			},

		{ "question" : "What language was Aeneid by Virgil written in?",
			"answer" : "Latin",
			"choices" : ["Greek", "Italian", "Latin", "Lithuanian"],
			},

		{ "question" : "How many lines of dactylic hexameter are there in The Odyssey?",
			"answer" : "12,110",
			"choices" : ["220", "12,110", "7,840", "1,522"],
			},

		{ "question" : "What Shakespeare play is this line from:'To thine own self be true'?",
			"answer" : "Hamlet",
			"choices" : ["Romeo & Juliet", "Julius Caesar", "Hamlet", "Macbeth"],
			},
		],
	};


$("#answer-box").hide();
$('#results-box').hide();
$('#wrong-answer').hide();
$('#right-answer').hide();

//START THE GAME
//start button click triggers begin function
$("#start-button").on("click", function() {
		$("#start-button").hide();

	numberCorrect = 0, numberIncorrect = 0, unanswered = 0, questionCount=0, countdown = 21;

	countInterval = setInterval(nextQuestionCountDown, 1000);

	begin();

});


//show question, start countdown
function askQuestion(questionCount) {
	$('#wrong-answer').hide();
	$('#right-answer').hide();
	countdown = 21;
	console.log(countdown);
	console.log("You're on question # " + questionCount);

	$('#answer-box').show();

	if( questionCount < 10 ) {
		console.log("Question displayed: " + questionObject.ques[questionCount].question);
		$('#question-box').html(questionObject.ques[questionCount].question);

		//show answer choices
		$('#a').html(questionObject.ques[questionCount].choices[0]);
		$('#b').html(questionObject.ques[questionCount].choices[1]);
		$('#c').html(questionObject.ques[questionCount].choices[2]);
		$('#d').html(questionObject.ques[questionCount].choices[3]);
	}

	else {
		//start the questions over, show results function
		clearInterval(countInterval);
		results();
	}
}


function nextQuestionCountDown() {
	countdown--;

    $('#countdown').html('<h2>Time Remaining: ' + countdown + ' seconds</h2>');
    
    if (countdown === 0){

        clearInterval(countInterval);

        unanswered++;
        console.log("Unanswered Questions: " + unanswered);
        alert('Time Up!');

        questionCount++;

        if ( questionCount == 10 ) {
        	clearInterval(countInterval);
        	results();
        }
        else {
	        askQuestion(questionCount);
	        countdown = 21;
	        countInterval = setInterval(nextQuestionCountDown,1000);
        }

    }
}


//check if answer is correct
function checkAnswer(selected) {
	if(selected === questionObject.ques[questionCount].answer) {
		return true;
	}
	else {
		return false;
	}
}

//================I couldn't get these to work properly with the questionCount===========
// function wrongAnswer(){
// 	$('#question-box').hide();
// 	$('#answer-box').hide();
// 	$('#countdown').hide();
// 	numberIncorrect++;
// 	console.log("Number incorrect: "+numberIncorrect);
// 	questionCount++;
// 	$('#wrong-answer').show();
// 	setTimeout(askQuestion(questionCount), 5000);
// }

// function rightAnswer(){
// 	$('#question-box').hide();
// 	$('#answer-box').hide();
// 	$('#countdown').hide();
// 	numberCorrect++;
// 	console.log("Number correct: "+numberCorrect);
// 	questionCount++;
// 	$('#right-answer').show();
// 	setTimeout(askQuestion(questionCount), 5000);
// }

//function that starts the entire game
function begin(){
	
	$('#wrong-answer').hide();
	$('#right-answer').hide();
	$('#results-box').hide();
	$('#question-box').show();
	$('#answer-box').show();
	$('#countdown').show();
	//ask the question
	askQuestion(questionCount);

	counter=21;

	//if an item is clicked...
	$('.list-group-item').on('click', function(){

		//if it's correct
		if (checkAnswer($(this).html()) === true){
				// rightAnswer();
			alert("Good job! You selected the correct answer!")
			numberCorrect++;
			console.log("Number correct: "+numberCorrect);
			questionCount++;
			askQuestion(questionCount);

		}

		//else if it's incorrect
		else if (checkAnswer($(this).html()) === false){
				//wrongAnswer();
			alert("Wrong answer :( Better luck next time!")
			numberIncorrect++;
			console.log("Number incorrect: "+numberIncorrect);
			questionCount++;
			askQuestion(questionCount);

		};
	})

	if (countdown === 0){
		$('#question-box').hide();
		$('#answer-box').hide();
		$('#results-box').html("You ran out of time!");
		unanswered++;
		askQuestion();
	}
}


function results () {
	$('#question-box').hide();
	$('#answer-box').hide();
	$('#countdown').hide();
	$('#results-box').show();
	$('#correct').html("Number Correct: " + numberCorrect);
	$('#incorrect').html("Number Incorrect: " + numberIncorrect);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#play-again').on("click", function(){
		resetGame();
		begin();
	});

	console.log("Number Correct: " + numberCorrect);
	console.log("Number Incorrect: " + numberIncorrect);
	console.log("Unanswered: " + unanswered);

}


function resetGame(){
	numberCorrect = 0, numberIncorrect = 0, unanswered = 0, questionCount=0, countdown = 21;

}