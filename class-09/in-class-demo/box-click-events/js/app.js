'use strict';

console.log('hi');

// STEP 1: window into the DOM
let container = document.getElementById('container')
console.log(container);

// STEP 3: Declare a function to be the event handler
function handleClick(event) {
  // console.log('click happened');
  // console.log(event);
  let results = document.getElementById('results');
  console.log(results);
  let thingThatGotClicked = event.target.id;
  console.log(thingThatGotClicked)

  let ptag = document.createElement('p')
  ptag.textContent = `You clicked on ${thingThatGotClicked}`;
  results.appendChild(ptag);

}


// STEP 2: Add event listener
container.addEventListener('click', handleClick);

// // anther example in another context:
//form.addEventListener('submit', handleSubmit);
