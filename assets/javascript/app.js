
var numberCorrect = 0;
var numberIncorrect = 0;
var unanswered = 0;
var questionCount = 0;
var delayButtonAlert;
var count = 30;

var questionObject = {
	"ques" : [
		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway"],
			},
		],
	};


//make a function for hiding question and answers
function hideItem(htmlItem){
	$(htmlItem).hide();
};


//show questions
function askQuestion(questionCount) {
	countdown = 30;
	$('#answer-box').show();
	if( questionCount < 5 ) {
		console.log(questionObject.ques[questionCount].question);
		$('#question-box').html(questionObject.ques[questionCount].question);

		//Display multiple choices
		$('#a').html(questionObject.ques[questionCount].choices[0]);
		$('#b').html(questionObject.ques[questionCount].choices[1]);
		$('#c').html(questionObject.ques[questionCount].choices[2]);
		$('#d').html(questionObject.ques[questionCount].choices[3]);
	}

	else {
		clearInterval(counter);
		results();
	}
}


// make a function for a 30 sec countdown timer
var counter = setInterval(timer, 1000);

function timer(){
  count = count-1;
  if (count <= 0){
     clearInterval(counter);
     alert("Time's up!");
     return;
  }
  $('#countdown').html(count+' seconds');
}


//make a function for the WHOLEgame. trigger on START click.
// function start() {
	$("#start-button").on("click", function() {
		hideItem('#start-button');
	
	//Ask First Question
	askQuestion(questionCount);
	//console.log(trivia.questions[questionCount].question);
	counter = setInterval(countDownToNextQuestion,1000);
	})
// }

// start();

//make a function for the question object
//for loop

// iterateObject(questions);

//show question & options in question box
	//and set time remaining to 30 seconds with countdown
	
	//if 

		//timer runs out
			//hide question&answers
			//show message "you ran out of time!!" for 5 seconds
				// newQuestion.append('You ran out of time!');
			//increment unanswered
			//go on to next question

		//user answers,
			//stop timer
			// $(".questionDiv").on("click", function() {
			// 	clearTimeout(delayButtonAlert);
			// });
			//if option = answer,
				//hide question&answers
				//show message "Correct answer!" for 5 seconds
					// newQuestion.append('Correct answer!');
				//increment numberCorrect
				//go to next question
			//else if option != answer,
				//hide question&answers
				//show message "Incorrect answer!" & the correct answer for 5 seconds
					// newQuestion.append('Incorrect answer!');
				//increment numberIncorrect
				//go to next question
//close the question object function


//create the reset game function.
	//reset time remaining to 30seconds
	//set numberCorrect, numberIncorrect, and unanswered to 0.
	//call question object function


//end of questions function. 
	//hide question&answers

	//Show correct answers, incorrect answers, unanswered.

	//call reset game function

//close the WHOLEgame function.