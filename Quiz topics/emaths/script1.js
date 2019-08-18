var userOption;
var score = 0; //To store score of the user

var ques = ["1) If the three angles of a quadrilateral are 120 degree , 130 degree, 10 degree then what is the fourth angle ?", "2) The formula for finding volume of cuboid is ", "3) Which of the following is not a square number?","4) What is the length of the diagonal of a rectangle having dimensions 3cm and 4cm?","5) 729 is the value of"];
var op1 = ["1) 120degree", "1) l × b × h", "1) 16","1) 5 cm","1) 6<sup>3</sup>"];
var op2 = ["2) 100 degree", "2) l + b + h", "2) 36","2) 8 cm","2) 7<sup>3</sup>"];
var op3 = ["3) 90 degree", "3) l × b ", "3) 25","3) 4 cm","3) 9<sup>3</sup>"];
var op4 = ["4) 45 degree", "4) l + b", "4) 24","4) 10 cm","4) 8<sup>3</sup>"];
var correctOption = [2,1,4,1,3];

function finalPage() {
	document.getElementById("questionPart").innerHTML = "";
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

printQuestions();