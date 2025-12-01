import { animate, utils, createDraggable, spring } from 'animejs';

const [ $logo ] = utils.$('.title');
const [ $button ] = utils.$('.title');
let rotations = 0;

// Created a bounce animation loop
animate('.title', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: spring({ bounce: .7 }) }
  ],
  loop: true,
  loopDelay: 250,
});

// Make the logo draggable around its center
createDraggable('.logo.js', {
  container: [0, 0, 0, 0],
  releaseEase: spring({ bounce: .7 })
});
