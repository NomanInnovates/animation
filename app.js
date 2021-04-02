const cards = [].slice.call(dex.children);
console.log("cards=>",cards)
cards.unshift(cards.pop())
console.log(cards)
const down = () => {
  cards.push(cards.shift());
  setClasses();
}

const up = () => {
  cards.unshift(cards.pop());
  setClasses();
}


const setClasses = () => {
  cards.forEach((card) => { card.className = ''; });
  cards[cards.length - 10].classList.add('prev10');
  cards[cards.length - 9].classList.add('prev9');
  cards[cards.length - 8].classList.add('prev8');
  cards[cards.length - 7].classList.add('prev7');
  cards[cards.length - 6].classList.add('prev6');
  cards[cards.length - 5].classList.add('prev5');
  cards[cards.length - 4].classList.add('prev4');
  cards[cards.length - 3].classList.add('prev3');
  cards[cards.length - 2].classList.add('prev2');
  cards[cards.length - 1].classList.add('prev1');
  cards[0].classList.add('current');
}

setClasses();

document.body.addEventListener('keyup', function(evt) {
    console.log("keyup")
  switch (evt.keyCode) {
    case 38: 
      up(); 
      break;
    case 40: 
      down(); 
      break;    
  }
});

document.body.addEventListener('wheel', function(evt) {
  switch (evt.deltaY < 0) {
    case true: 
      up(); 
      break;
    case false: 
      down();
      break; 
  }
});


