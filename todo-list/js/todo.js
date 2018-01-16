'use strict';

const done = document.querySelector('.done');
const undone = document.querySelector('.undone');

for (const el of document.getElementsByTagName('input')) {
  el.addEventListener('change', move);
}

function move(event) {
  const label = event.target.parentElement;

  if(event.target.checked) {
    done.appendChild(label);
  } else {
    undone.appendChild(label);
  }
}