'use strict';

const greeting = document.querySelectorAll('.section__greetings-msg > p'),
		clock = document.querySelector('.section__greetings-clock');
let hours;
let minutes;
let sec;


function checkTime() {
  const day = new Date();
	hours = day.getHours();
	minutes = day.getMinutes();
	sec = day.getSeconds();
	console.log(hours, minutes, sec)
}
//console.log(greeting);

function showClock() {
	checkTime();
	clock.textContent = `${hours} : ${minutes} : ${sec}`;

}

function loadMessage() {
	showClock();
  if (hours <= 12) {
    greeting[0].style.display = 'block';
  } else if (hours < 18) {
    greeting[1].style.display = 'block';
  } else if (hours >= 18) {
    greeting[2].style.display = 'block';
  }
}

loadMessage();
