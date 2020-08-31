'use strict';

const greeting = document.querySelectorAll('.section__greetings-msg > p');
let hours;

function checkTime() {
  const day = new Date();
  hours = day.getHours();
}
console.log(greeting);

function loadMessage() {
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
