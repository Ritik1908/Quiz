var x=0;
var sc=0;
var myVar;
var ques = ["1) Which of the statement is not true for a machine","2) The radiation given out by radioactive elements ","3) The amount of heat energy required to melt a given mass of a substance at its melting point without any rise in temperature is called:","4) A fire tong is a lever of","5) For hearing an echo,the minimum distance between the source of sound and reflecting body should be:"];
var op1 = ["1) it can multiply force","1) Effects photographic plates ","1) Heat capacity","1) 1st order","1) 12m"];
var op2 = ["2) it can increase speed","2) Ionise the gases","2) sp.heat capacity","2) 2nd order","2) 25m"];
var op3 = ["3) it can change the direction of applied force","3) Are affected by electrostatic and magnetic fields","3) Sp.latent heat of fusion","3) 3rd order","3) 17m"];
var op4 = ["4) its output can be more than input","4) All of these","4) Latent heat of fusion","4) none of these","4) 58m"];
var oc=[4,4,3,3,3];
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