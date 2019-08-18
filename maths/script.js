var userOption;
var score = 0; //To store score of the user
var ques = [];
var op1 = [];
var op2 = [];
var op3 = [];
var op4 = [];
var correctOption = [];

function showInstructions () {
	document.getElementById("categorySection").style.display = "none";
	document.getElementById("instruction").style.display = "block";
}

function showQuizSection () {
	document.getElementById("instruction").style.display = "none";
	document.getElementById("quizSection").style.display = "block";	
}
function easy() {
	ques = ["1) If the three angles of a quadrilateral are 120 degree , 130 degree, 10 degree then what is the fourth angle ?", "2) The formula for finding volume of cuboid is ", "3) Which of the following is not a square number?","4) What is the length of the diagonal of a rectangle having dimensions 3cm and 4cm?","5) 729 is the value of"];
	op1 = ["1) 120degree", "1) l × b × h", "1) 16","1) 5 cm","1) 6<sup>3</sup>"];
	op2 = ["2) 100 degree", "2) l + b + h", "2) 36","2) 8 cm","2) 7<sup>3</sup>"];
	op3 = ["3) 90 degree", "3) l × b ", "3) 25","3) 4 cm","3) 9<sup>3</sup>"];
	op4 = ["4) 45 degree", "4) l + b", "4) 24","4) 10 cm","4) 8<sup>3</sup>"];
	correctOption = [2,1,4,1,3];
	showInstructions();
	console.log(correctOption);
}

function moderate() {
	ques = ["1) Every person shakes hands with each other in a party and the total number of handshakes is 66. The number of guests in the party is", "2) If the set P has 3 elements, Q four and R two then the set P×Q×R contains", "3) The mean salary for a group of 40 female workers is 5200 per month and that for a group of 60 male workers is 6800 per month. What is the combined mean salary?","4) A bag contains 15 one rupee coins, 25 two rupee coins and 10 five rupee coins. If a coin is selected at random from the bag, then the probability of not selecting a one rupee coin is","5) 729 is the value of "];
	op1 = ["1) 11", "1) 20 elements", "1) 6300","1) 0.50","1) 9<sup>3</sup>"];
	op2 = ["2) 12", "2) 26 elements", "2) 6100","2) 0.70","2) 8<sup>3</sup>"];
	op3 = ["3) 13", "3) 24 elements", "3) 6160","3) 0.65","3) 5<sup>3</sup>"];
	op4 = ["4) 14", "4) 30 elements", "4) 6200","4) 0.25","4) 11<sup>3</sup>"];
	correctOption = [2,3,3,2,1];
	showInstructions();
	console.log(correctOption)
}

function hard() {
	ques = ["1) If the three angles of a quadrilateral are 120 degree , 130 degree, 10 degree then what is the fourth angle ?", "2) The formula for finding volume of cuboid is ", "3) Which of the following is not a square number?","4) What is the length of the diagonal of a rectangle having dimensions 3cm and 4cm?","5) 729 is the value of"];
	op1 = ["1) 120degree", "1) l × b × h", "1) 16","1) 5 cm","1) 6<sup>3</sup>"];
	op2 = ["2) 100 degree", "2) l + b + h", "2) 36","2) 8 cm","2) 7<sup>3</sup>"];
	op3 = ["3) 90 degree", "3) l × b ", "3) 25","3) 4 cm","3) 9<sup>3</sup>"];
	op4 = ["4) 45 degree", "4) l + b", "4) 24","4) 10 cm","4) 8<sup>3</sup>"];
	correctOption = [2,1,4,1,3];
	showInstructions();
	console.log(correctOption);
}

function finalPage() {
	document.getElementById("questionSection").innerHTML = "";
	document.getElementById("msg1").innerHTML = "You completed your quiz.";
	document.getElementById("msg2").innerHTML = "Your score = "+score;
	document.getElementById("msg3	").innerHTML = "okay";
}

var timeInterval;

function timeSet() {
	timeInterval = setTimeout(function() {
		buttonPressed();
	}, 60000);
}

var j;
function coundown(){
	setInterval(() => {
		if (this.j == 0) {
			return;
		}
		document.getElementById('time').innerHTML = this.j--;
	}, 1000);
}

var i = 0;
function printQuestions() {
	userOption = -1;
	document.getElementById("question").innerHTML = ques[i];
	document.getElementById("option1").innerHTML = op1[i];
	document.getElementById("option2").innerHTML = op2[i];
	document.getElementById("option3").innerHTML = op3[i];
	document.getElementById("option4").innerHTML = op4[i];
	timeSet();
	j=60;
	coundown();
}

function buttonPressed(){
	clearTimeout(timeInterval);
	if(userOption == correctOption[i]) {
		score = score + 5;
		document.getElementById("score").innerHTML = score;
		document.getElementById("answer").innerHTML = "Correct Answer";
	}
	else {
		document.getElementById("score").innerHTML = score;
		document.getElementById("answer").innerHTML = "Wrong Answer";
	}
	i++;
	if(i < ques.length) {
		printQuestions();
	}
	else {
		finalPage();
	}
}

function startQuiz() {
	showQuizSection();
	printQuestions();
}