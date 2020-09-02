'use strict';
/*
 const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: '.project1' })
  .setClassToggle('.project1', 'visible')
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: '.project2' })
  .setClassToggle('.project2', 'visible')
  .addTo(controller);
 */

const sectionProject = document.querySelector('.section__project'),
  projects = sectionProject.querySelectorAll('.project__list-box');

sectionProject.addEventListener('scroll', () => {
  let scrollTop = sectionProject.scrollTop;
});
