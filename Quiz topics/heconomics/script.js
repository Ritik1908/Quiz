var x=0;
var sc=0;
var myVar;
var ques = ["1) Photosynthesis is a", "2) Opening and closing of pores is a function performed by", "3) Which element is used in the synthesis of proteins?","4) Temporary finger like extensions on amoeba are called","5) Bile juice is secreted by"];
var op1 = ["1) Catabolic process", "1) Stomata", "1) Hydrogen","1) Cell Membrane","1) Stomach"];
var op2 = ["2) Parabolic process", "2) Chlorophyll", "2) Oxygen","2) Cell Wall","2) Pancreas"];
var op3 = ["3) Amphibolic process", "3) Chloroplast", "3) Nitrogen","3) Pseudopodia","3) Small intestine"];
var op4 = ["4) Photochemical process", "4) Guard cells", "4) Carbon dioxide","4) Cilia","4) Liver"];
var oc=[4,4,3,3,4];
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