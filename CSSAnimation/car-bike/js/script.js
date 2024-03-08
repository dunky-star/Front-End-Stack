'use strict';

let textRain = document.querySelector('.text--rain');
let htmlSpans = textRain.innerText
  .split('')
  .map((letter, i) => {
    return `<span style= "animation-duration: ${
      Math.random() * 5
    }s; filter: hue-rotate(${i * 50}deg">${letter}</span>`;
  })
  .join('');

textRain.innerHTML = htmlSpans;

//console.log(htmlSpans);
