
var numberCorrect = 0;
var numberIncorrect = 0;
var unanswered = 0;
var newQuestion = $("#question-box");

var objQuestions = {
	q1 : 'Who wrote To Kill a Mockingbird?',

	q2 : 'Who wrote The Great Gatsby?',

	q3 : 'Who wrote "The Adventures of Huckleberry Finn"?',

	};

var objAnswers = {
	a1 : ['Harper Lee', 'F. Scott Fitzgerald', 'Ernest Hemingway'],
	a2 : ['Person 1', 'Person 2', 'Person 3',],

};


//make a function for hiding question and answers
function hideItem(htmlItem){
	$(htmlItem).hide();
};


//make a function for the WHOLEgame. trigger on START click.
$('#start-button').click(function(){

hideItem('#start-button');

// $('#demo').click(timedText());

// function timedText() {
//     setTimeout(timeQuestion1, 2000) 
//     setTimeout(timeQuestion2, 4000)  
// };

// function timeQuestion1() {
//     $('#demo').append = "QUESTION 1";
// };
// function timeQuestion2() {
//     $('#demo').append = "QUESTION 2";
// };

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
})