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

	if (minutes < 10) {
		minutes = '0' + minutes;
	} else if (minutes === 0) {
		minutes = '00';
	}

	if (sec < 10) {
		sec = '0' + sec;
	} else if (sec === 0) {
		sec = '00';
	}

	// console.log(hours, minutes, sec)
}
//console.log(greeting);

function showClock() {
	checkTime();
	clock.textContent = `${hours} : ${minutes} : ${sec}`;

}

function loadMessage() {
	setInterval(() => {showClock()}, 1000)
	checkTime();
  if (hours <= 12) {
    greeting[0].style.display = 'block';
  } else if (hours < 18) {
    greeting[1].style.display = 'block';
  } else if (hours >= 18) {
    greeting[2].style.display = 'block';
  }
}

loadMessage();
