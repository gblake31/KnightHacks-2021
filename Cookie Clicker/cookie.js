// JavaScript File for Cookie Clicker

const grandmaCost = 25;

let numCookies = 0;
let numGrandmas = 0;

const oncePerSec = setInterval(everySecond, 1000);
const timer = setInterval(update, 50);

function update()
{
	document.getElementById("counter").innerHTML = "" + numCookies;
	document.getElementById("grammar").innerHTML = (numCookies == 1 ? "cookie" : "cookies"); 
}

function onClick() 
{
	numCookies++;
	update();
};

function grandma()
{
	if (numCookies >= grandmaCost)
	{
		numGrandmas++;
		numCookies -= grandmaCost;
		update();
	}
}

function everySecond()
{
	numCookies += numGrandmas;
};
