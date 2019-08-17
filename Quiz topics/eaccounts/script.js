var x=0;
var sc=0;
var myVar;
var ques = ["1) Purchase book records:", "2) Dividends are usually paid as a percentage of", "3) In the absence of any provision in partnership agreement,profits and losses are shared","4) The parties to joint venture is called","5) Which of the following are of capital nature?"];
var op1 = ["1) All cash purchases", "1) Paid-up capital", "1) In the ratio of capitals","1) Co-venture","1) Purchase of goods"];
var op2 = ["2) All credit purchases of goods and assets", "2) Authorized share capital", "2) Equally","2) Partners","2) Cost of repairs"];
var op3 = ["3) All credit purchases of goods in trade only", "3) Net profit", "3) In the ratio of loans given by them to the partnership firm","3) Principal and Agent","3) Wages paid for installation of machinery"];
var op4 = ["4) None of the above", "4) Called-up capital", "4) None of the above","4) Friends","4) Rent of a factory"];
var oc=[3,1,2,1,3];
function startTimer(duration, display) 
{
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() 
	{
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) 
		{
            start = Date.now();
        }
    };
    timer();
    setInterval(timer, 1000);
}
window.onload = function () 
{
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
function check1()
{
	x=1;
}
function check2()
{
	x=2;
}
function check3()
{
	x=3;
}
function check4()
{
	x=4;
}
function a1()
{
	x=100;
	check1();
	check2();
	check3();
	check4();
	x=100;
	document.getElementById("p01").innerHTML ="SCORE="+sc;
	document.getElementById("p5").innerHTML = ques[1];
	document.getElementById("p1").innerHTML = op1[1];
	document.getElementById("p2").innerHTML = op2[1];
	document.getElementById("p3").innerHTML = op3[1];
	document.getElementById("p4").innerHTML = op4[1];
}
function a2()
{
	x=100;
	check1();
	check2();
	check3();
	check4();
	x=100;
	document.getElementById("p01").innerHTML ="SCORE="+sc;
	document.getElementById("p5").innerHTML = ques[2];
	document.getElementById("p1").innerHTML = op1[2];
	document.getElementById("p2").innerHTML = op2[2];
	document.getElementById("p3").innerHTML = op3[2];
	document.getElementById("p4").innerHTML = op4[2];
}
function a3()
{
	x=100;
	check1();
	check2();
	check3();
	check4();
	x=100;
	document.getElementById("p01").innerHTML ="SCORE="+sc;
	document.getElementById("p5").innerHTML = ques[3];
	document.getElementById("p1").innerHTML = op1[3];
	document.getElementById("p2").innerHTML = op2[3];
	document.getElementById("p3").innerHTML = op3[3];
	document.getElementById("p4").innerHTML = op4[3];
}
function a4()
{
	x=100;
	check1();
	check2();
	check3();
	check4();
	x=100;
	document.getElementById("p01").innerHTML ="SCORE="+sc;
	document.getElementById("p5").innerHTML = ques[4];
	document.getElementById("p1").innerHTML = op1[4];
	document.getElementById("p2").innerHTML = op2[4];
	document.getElementById("p3").innerHTML = op3[4];
	document.getElementById("p4").innerHTML = op4[4];
}
function a5()
{
	document.getElementById("xyz").innerHTML ="";
	document.getElementById("a1").innerHTML ="YOU COMPLETED YOUR QUIZ.";
	document.getElementById("a2").innerHTML ="YOUR TOTAL SCORE="+sc;
	document.getElementById("a3").innerHTML ="If you want to visit main page again Click on the link below";
	document.getElementById("a4").innerHTML ="Quiz";
}
document.getElementById("p01").innerHTML ="SCORE="+sc;
document.getElementById("p5").innerHTML = ques[0];
document.getElementById("p1").innerHTML = op1[0];
document.getElementById("p2").innerHTML = op2[0];
document.getElementById("p3").innerHTML = op3[0];
document.getElementById("p4").innerHTML = op4[0];
myVar = setTimeout(function()
{
	if(x==oc[0])
	{
		sc=sc+5;
		a1();
		document.getElementById("p03").innerHTML ="Correct Answer";
		myVar = setTimeout(function()
		{
			if(x==oc[1])
			{
		        sc=sc+5;
				a2();
				document.getElementById("p03").innerHTML ="Correct Answer";
		        myVar = setTimeout(function()
				{
					if(x==oc[2])
					{
						sc=sc+5;
						a3();
						document.getElementById("p03").innerHTML ="Correct Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
						},60000);
					}
					else
					{
						a3();
						document.getElementById("p03").innerHTML ="Wrong Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
						},60000);
					}
				},60000);				
			}
			else
			{
				a2();
				document.getElementById("p03").innerHTML ="Wrong Answer";
				myVar = setTimeout(function()
				{
					if(x==oc[2])
					{
						sc=sc+5;
						a3();
						document.getElementById("p03").innerHTML ="Correct Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
								},60000);
							}
						},60000);
					}
					else
					{
						a3();
						document.getElementById("p03").innerHTML ="Wrong Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
						},60000);
					}
				},60000);				
			}
		},60000);
	}
	else
	{
		a1();
		document.getElementById("p03").innerHTML ="Wrong Answer";
		myVar = setTimeout(function()
		{
			if(x==oc[1])
			{
		        sc=sc+5;
				a2();
				document.getElementById("p03").innerHTML ="Correct Answer";
		        myVar = setTimeout(function()
				{
					if(x==oc[2])
					{
						sc=sc+5;
						a3();
						document.getElementById("p03").innerHTML ="Correct Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
						},60000);
					}
					else
					{
						a3();
						document.getElementById("p03").innerHTML ="Wrong Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
						},60000);
					}
				},60000);				
			}
			else
			{
				a2();
				document.getElementById("p03").innerHTML ="Wrong Answer";
				myVar = setTimeout(function()
				{
					if(x==oc[2])
					{
						sc=sc+5;
						a3();
						document.getElementById("p03").innerHTML ="Correct Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
								},60000);
							}
						},60000);
					}
					else
					{
						a3();
						document.getElementById("p03").innerHTML ="Wrong Answer";
						myVar = setTimeout(function()
						{
							if(x==oc[3])
							{
								sc=sc+5;
								a4();
								document.getElementById("p03").innerHTML ="Correct Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
							else
							{
								a4();
								document.getElementById("p03").innerHTML ="Wrong Answer";
								myVar = setTimeout(function()
								{
									if(x==oc[4])
									{
										sc=sc+5;
										a5();
										document.getElementById("p03").innerHTML ="Correct Answer";
									}
									else
									{
										a5();
										document.getElementById("p03").innerHTML ="Wrong Answer";
									}
								},60000);
							}
						},60000);
					}
				},60000);				
			}
		},60000);
	}
},60000);