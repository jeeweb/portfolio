'use strict';

const wrapper = document.querySelector('.wrapper'),
  section = document.querySelector('#section'),
  articles = document.querySelectorAll('article');

let winHeight;
let articlesPosY = [];

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
  }

  wrapper.style.height = winHeight;
}
windowHeight();

window.addEventListener('resize', () => {
  windowHeight();
  articlesPosY = [];
  slideHeight();
});

section.addEventListener('scroll', () => {
  let scrollTop = section.scrollTop;
  //console.log(scrollTop, articlesPosY);

  for (let i = 0; i < articles.length; i++) {
    let currentArticle = articles[i].getBoundingClientRect().top;

    if (scrollTop - currentArticle > 0) {
      articles[i].classList.add('active');

      if (articles[i].classList.contains('section__project')) {
        articles[i].querySelector('.project1').classList.add('visible');
      }
    } else {
      articles[i].classList.remove('active');
    }
  }
});
