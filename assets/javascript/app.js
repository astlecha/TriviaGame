
var numberCorrect = 0;
var numberIncorrect = 0;
var unanswered = 0;
var questionCount = 0;
var delayButtonAlert;
var countdown = 30;

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
		],
	};


$("#answer-box").hide();
$('results-box').hide();

//show question, start countdown
function askQuestion(questionCount) {
	countDownTimer=31;
	console.log("You're on question # " + questionCount);
	// var countdown = 30;
	$('#answer-box').show();
	if( questionCount <= 5 ) {
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
		clearInterval(countdownIncrement);
		results();
	}
}


function nextQuestionCount() {
	countDownTimer--;

    $('#countdown').html('<h2>Time Remaining: ' + countDownTimer + ' seconds</h2>');


    if (countDownTimer === 0){

        clearInterval(countdownIncrement);

        unanswered++;
        console.log("Unanswered Questions: " + unanswered);
        console.log('Time Up!')

        questionCount++;

        if ( questionCount == 5 ) {
        	clearInterval(countdownIncrement);
        	results();
        }
        else {
	        askQuestion(questionCount);
	        countDownTimer = 30;
	        countdownIncrement = setInterval(nextQuestionCount,1000);
        }
    }
}

//check if answer is correct
function checkAnswer(selected) {
	if( selected === questionObject.ques[questionCount].answer) {
		return true;
	}

	else {
		return false;
	}
}

//function that starts the entire game
function begin(){
	
	//ask the question
	askQuestion(questionCount);

	//set a 1 second interval for nextQuestionCount function
	countdownIncrement = setInterval(nextQuestionCount,1000);

	//if an item is clicked...
	$('.list-group-item').on('click', function(){

		//if it's correct
		if (checkAnswer($(this).html()) === true){
				numberCorrect++;
				console.log("Number correct: "+numberCorrect);
				questionCount++;
				askQuestion(questionCount);
		}

		//else if it's incorrect
		else if (checkAnswer($(this).html()) === false){
				numberIncorrect++;
				console.log("Number incorrect: "+numberIncorrect);
				questionCount++;
				askQuestion(questionCount);
		}
	})

	if (countDownTimer === 0){
		$('#question-box').hide();
		$('#answer-box').hide();
		$('#results-box').html("You ran out of time!");
		unanswered++;
		askQuestion();
	}
}


//START THE GAME
//start button click triggers begin function
$("#start-button").on("click", function() {
		$("#start-button").hide();

	numberCorrect = 0, numberIncorrect = 0, unanswered = 0, questionCount=0, countDownTimer = 30;

	begin();

		// if (countDownTimer === 0){
		// 	$('#question-box').hide();
		// 	$('#answer-box').hide();
		// 	$('#results-box').html("You ran out of time!");
		// 	unanswered++;
		// 	askQuestion();
		// }

});


//show question & options in question box
	//and set time remaining to 30 seconds with countdown
	
	// if 



//create the reset game function.
	//reset time remaining to 30seconds
	//set numberCorrect, numberIncorrect, and unanswered to 0.
	//call question object function


//end of questions function. 
	//hide question&answers

	//Show correct answers, incorrect answers, unanswered.

	//call reset game function

//close the WHOLEgame function.