const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: '.project1' })
  .setClassToggle('.project1', 'visible')
  .addTo(controller);

new ScrollMagic.Scene({ triggerElement: '.project2' })
  .setClassToggle('.project2', 'visible')
  .addTo(controller);
