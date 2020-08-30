'use strict';

const articles = document.querySelectorAll('article');

let winHeight;
let articlesPosY = [];

console.log(articles);

function windowHeight() {
  winHeight = window.innerHeight;
  slideHeight();
  console.log(winHeight);
}

function slideHeight() {
  let top = 0;
  for (let i = 0; i < articles.length; i++) {
    articlesPosY.push(top);
    top = top + winHeight;
  }
}
windowHeight();

window.addEventListener('resize', () => {
  windowHeight();
  articlesPosY = [];
  slideHeight();
  //console.log('resize');
});

window.addEventListener('scroll', () => {
  console.log('scrolled', articlesPosY);
});
