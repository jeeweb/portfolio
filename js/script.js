'use strict';

const wrapper = document.querySelector('.wrapper'),
  section = document.querySelector('#section'),
  articles = document.querySelectorAll('article'),
  sectionProject = document.querySelector('.section__project'),
  projects = sectionProject.querySelectorAll('.project__list-box');

let winHeight;
let articlesPosY = [];

function windowHeight() {
  winHeight = window.innerHeight;
  slideHeight();
  // console.log(`windowHeight: ${winHeight}`);
}

function slideHeight() {
  let top = 0;

  for (let i = 0; i < articles.length; i++) {
    articlesPosY.push(top);
    top = top + winHeight;
  }

  wrapper.style.height = winHeight;
}

window.addEventListener('load', () => {
  addProjectClass();
  windowHeight();
});

/* 브라우저 크기 변경 시 */
window.addEventListener('resize', () => {
  windowHeight();
  articlesPosY = [];
  slideHeight();
});

/* 브라우저 스크롤 */
section.addEventListener('scroll', () => {
  let scrollTop = section.scrollTop;
  // console.log(`section: ${scrollTop}`);

  for (let i = 0; i < articles.length; i++) {
    let currentArticle = articles[i].getBoundingClientRect().top;

    if (scrollTop - currentArticle > 0) {
      articles[i].classList.add('active');

      if (articles[i] === sectionProject) {
        sectionProject.setAttribute('id', `show-project-0`);
        //projects[0].classList.add('visible');
      }
    } else {
      articles[i].classList.remove('active');
    }
  }
});

/* 프로젝트 스크롤 */
function addProjectClass() {
  for(let i = 0; i < projects.length; i++) {
    projects[i].classList.add(`project${i}`);
  }
}

sectionProject.addEventListener('scroll', () => {
  let currentProject = 0;  
  let scrollTop = sectionProject.scrollTop;
  let totalScrollHeight = 0;
  // console.log(`project: ${scrollTop}`);
  
  for(let i = 0; i < projects.length; i++) {
    totalScrollHeight += projects[i].scrollHeight;
    if (totalScrollHeight - 100 >= scrollTop) {
      // console.log(totalScrollHeight, scrollTop)
      currentProject = i;
      break;
    }
  }
  // console.log(`current: ${currentProject}`)
  sectionProject.setAttribute('id', `show-project-${currentProject}`);
  
  /* for (let i = 0; i < projects.length; i++) {
    let current = projects[i];
    //prev = num && projects[num - 1];
    let currentTop = current.getBoundingClientRect().top;
    //prevTop = prev.getBoundingClientRect().top;

    console.log(i, -(winHeight / 2), currentTop, winHeight / 2);
    if (-(winHeight / 2) < currentTop < winHeight / 2) {
      current.classList.add('visible');
      console.log('visible!');
    } else if (currentTop < -(winHeight / 2)) {
      console.log('hide!');
      current.classList.remove('visible');
      num = num + 1;
    }
  } */
});
