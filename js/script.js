'use strict';

const wrapper = document.querySelector('.wrapper'),
  section = document.querySelector('#section'),
  articles = document.querySelectorAll('article');

let winHeight;
let articlesPosY = [];

//console.log(articles);

function windowHeight() {
  winHeight = window.innerHeight;
  slideHeight();
  console.log(`windowHeight: ${winHeight}`);
}

function slideHeight() {
  let top = 0;
  for (let i = 0; i < articles.length; i++) {
    articlesPosY.push(top);
    top = top + winHeight;
    //articlesPosY.push(articles[i].getBoundingClientRect().top);
  }
  //console.log(wrapper);
  wrapper.style.height = winHeight;
}
windowHeight();

window.addEventListener('resize', () => {
  windowHeight();
  articlesPosY = [];
  slideHeight();
  //console.log('resize');
});

section.addEventListener('scroll', () => {
  let scrollTop = section.scrollTop;
  console.log(scrollTop, articlesPosY);

  //console.log(window.scrollY);
  for (let i = 0; i < articles.length; i++) {
    let currentArticle = articles[i].getBoundingClientRect().top;
    console.log(
      `scrollTop: ${scrollTop}, ${i}: ${currentArticle}, ${
        scrollTop - currentArticle
      }`
    );
    if (scrollTop - currentArticle > 0) {
      articles[i].classList.add('active');
    } else {
      articles[i].classList.remove('active');
    }
  }
});
