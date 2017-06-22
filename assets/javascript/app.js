
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
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Louisa May Alcott"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Louisa May Alcott"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Louisa May Alcott"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Louisa May Alcott"],
			},

		{ "question" : "Who wrote 'To Kill a Mockingbird'?",
			"answer" : "Harper Lee",
			"choices" : ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "Louisa May Alcott"],
			},
		],
	};


//make a function for hiding question and answers
function hideItem(htmlItem){
	$(htmlItem).hide();
	console.log(htmlItem);
};


hideItem('#question-box');

//show question, start countdown
function askQuestion(questionCount) {
	countdown = 30;
	$('#answer-box').show();
	if( questionCount < 5 ) {
		console.log(questionObject.ques[questionCount].question);
		$('#question-box').html(questionObject.ques[questionCount].question);

		//show answer choices
		$('#a').html(questionObject.ques[questionCount].choices[0]);
		$('#b').html(questionObject.ques[questionCount].choices[1]);
		$('#c').html(questionObject.ques[questionCount].choices[2]);
		$('#d').html(questionObject.ques[questionCount].choices[3]);
	}

	else {
		//start the questions over, show results function
		clearInterval(counter);
		results();
	}
}


function nextQuestionCount() {
	countdown--;

    $('#countdown').html('<h2>Time Remaining: ' + countdown + ' seconds</h2>');


    if (countdown === 0){

        clearInterval(counter);

        unanswered++;
        console.log("Unanswered Questions: " + unanswered);
        console.log('Time Up!')

        questionCount++;

        if ( questionCount == 5 ) {
        	clearInterval(counter);
        	results();
        }
        else {
	        askQuestion(questionCount);
	        countdown = 30;
	        counter = setInterval(nextQuestionCount,1000);
        }
    }
}

//function that starts the entire game
function begin(){
	//Ask First Question
	askQuestion(questionCount);
	counter = setInterval(nextQuestionCount,1000);

	$('.list-group-item').on('click', function(){
		clearInterval(counter);
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
	})

	}


//START THE GAME
//start button click triggers begin function
	$("#start-button").on("click", function() {
		hideItem('#start-button');

	numberCorrect = 0, numberIncorrect = 0, unanswered = 0, questionCount = 0, count = 30;

	begin();

		if (count === 0){
			$('#question-box').hide();
			$('#answer-box').hide();
			$('#results-box').html("You ran out of time!");
			unanswered++;
			askQuestion();
		}

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