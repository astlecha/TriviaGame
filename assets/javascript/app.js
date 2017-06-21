
var numberCorrect = 0;
var numberIncorrect = 0;
var unanswered = 0;

var questions = {
	q1: a1,
	q2: a2,
};

//make a function for the WHOLEgame. trigger on START click.
//make a function for hiding question and answers

//make a function for the question object
//for loop

//show question & options in question box 
	//and set time remaining to 30 seconds with countdown
	
	//if 

		//timer runs out
			//hide question&answers
			//show message "you ran out of time!!" for 5 seconds
			//increment unanswered
			//go on to next question

		//user answers,
			//stop timer
			//if option = answer,
				//hide question&answers
				//show message "Correct answer!" for 5 seconds
				//increment numberCorrect
				//go to next question
			//else if option != answer,
				//hide question&answers
				//show message "Wrong answer!" & the correct answer for 5 seconds
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