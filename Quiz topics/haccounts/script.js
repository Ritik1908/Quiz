var x=0;
var sc=0;
var myVar;
var ques = ["1) Fluctuating capital account is credited with", "2) The plant and machinery account of a firm had a debit balance of Rs. 1,47,390 (before charging depreciation for the year) as on 31st December, 2016. On 1st Jan., 2013 firm started business and has been following the practice of charging full year’s depreciation every year on Diminishing balance method @ 15%. Cost of machinery on 01.01.2013 will be", "3) The total of debit and credit side of Mr. Raja Ram’s Trial balance as on 31st March, 2016 were Rs. 20,000 and Rs. 10,000 respectively. The difference was transferred to suspense A/c. On 4th April 2016, it was found that the total of sales book was carried forward as 5,000 instead of 4,000. The balance of suspense A/c after rectification of this error will be -","4) A Company issued 2,000, 12% debentures of Rs. 100 each at par but redeemable at 5% premium. Loss on issue of debentures will be","5) Overdraft as per pass book is given Rs. 10,000 (i) Cheques deposited in the Bank but not recorded in Cash Book Rs. 100 (ii) Cheques drawn but not presented for payment Rs. 6,000 (iii) Bank charges recorded twice in cash book Rs. 30 Overdraft as per Cash Book will be"];
var op1 = ["1) Interest on capital", "1) Rs. 2,40,000", "1) Rs.11,000","1) Rs. 11,000","1) Rs. 15,130"];
var op2 = ["2) Profit of the year", "2) Rs. 2,50,000", "2) Rs.13,000","2) Rs. 10,000","2) Rs. 16,000"];
var op3 = ["3) Salaries or Remuneration of the partners", "3) Rs. 2,30,000", "3) Rs.10,000","3) Rs. 15,000","3) Rs. 16,100"];
var op4 = ["4) All of the above", "4) Rs. 2,00,000", "4) Rs.15,000","4) Rs. 17,000","4) Rs. 16,130"];
var oc=[4,1,1,2,4];
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