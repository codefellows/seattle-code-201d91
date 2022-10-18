'use strict';

// console.log('hi');



// there is a collection of goat photos
// user is presented them in 2s — two goats photos at a time\
// should be 2 different photos
// user vote on their favorite photo by clicking on it

// 15 match ups per round — so 15 total votes
// display the results of the vote

/*
- Global variables
  score
  count the number of rounds
  some way to count images
  window into DOM
  goat array of goat instances. ex.: goat[randomNumber].src

  Goat Constructor
    - goat photo (src)
    - goat photo alt text
    - score - how many times has this goat been voted on
    - views - hhow many times did the user see the goat

    Goat Methods
      - change the goat image, increment the goat's views
      - generate a random number, pass it into my goat array
      - check to make sure the goat images are different
      - event listener (click) — tally the vote for the goat

  create all the instances of goat

  After 15 rounds of voting ...?
    - Give the user the results (views and the score)
    - stop voting
    - stop generating new goat photos

*/

let myContainer = document.querySelector('section');
let resultBtn = document.querySelector('section + div');
// let results = document.querySelector('ul');

let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let howManyTimesUserHasVoted = 0;
let maxNumberOfVotes = 15;

let indexArray = [];

// console.log(image2.src);

// image2.src = 'images/sassy-goat.jpg';

function Goat(name, fileExtension = 'jpg') {
  this.name = name;
  this.fileExtension = fileExtension;
  this.src = `images/${this.name}.${this.fileExtension}`;
  this.score = 0;
  this.views = 0;
}

let cruisin = new Goat(
  'cruisin-goat',
  'png'
);
let float = new Goat('float-your-goat');
let hand = new Goat('goat-out-of-hand');
let kissing = new Goat('kissing-goat');
let sassy = new Goat('sassy-goat');
let smile = new Goat('smiling-goat');
let sweater = new Goat('sweater-goat');

// image2.src = sassy.src;

let allGoats = [cruisin, float, hand, kissing, sassy, smile, sweater];
// console.log(allGoats);

// image2.src = allGoats[6].src;

function selectRandomGoat() {
  // random number between 0 and length of the array (7)
  // not inclusive
  return Math.floor(Math.random() * allGoats.length);
}

function renderGoats() {

  while (indexArray.length < 4) {
    let ranNum = selectRandomGoat();
    if (!indexArray.includes(ranNum)) {
      indexArray.push(ranNum);
    }
  }
  console.log(indexArray);
  let goat1 = indexArray.shift();
  let goat2 = indexArray.shift();

  // let goat1 = selectRandomGoat(); // 2
  // let goat2 = selectRandomGoat(); // 2
  // // console.log(goat1, goat2);
  // // seriously consider using an array
  // // remember: how do you find out if an array includes something?
  // // google it

  // while (goat1 === goat2) {
  //   goat2 = selectRandomGoat(); // 2
  //   // console.log(goat1, goat2);
  // }

  // console.log(goat1, goat2);

  image1.src = allGoats[goat1].src;
  image1.alt = allGoats[goat1].name;
  allGoats[goat1].views++;
  // console.log(allGoats[goat1]);
  image2.src = allGoats[goat2].src;
  image2.alt = allGoats[goat2].name;
  allGoats[goat2].views++;
}

function renderResults() {
  // for (let i = 0; i < allGoats.length; i++) {
  //   let li = document.createElement('li');
  //   li.textContent = `${allGoats[i].name} had ${allGoats[i].views} views and ${allGoats[i].score} votes`;
  //   results.appendChild(li);
  // }
}


function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image')
  }
  // console.log(event.target.alt);
  howManyTimesUserHasVoted++;
  let clickedGoat = event.target.alt;

  for (let i = 0; i < allGoats.length; i++) {
    if (event.target.alt === allGoats[i].name) {
      // console.log(allGoats[i]);
      allGoats[i].score++;
      break;
    }
  }
  if (howManyTimesUserHasVoted === maxNumberOfVotes) {
    myContainer.removeEventListener('click', handleClick);
    // resultBtn.className = 'clicks-allowed';
    // resultBtn.addEventListener('click', renderResults);
    renderChart();
  } else {
    renderGoats();
  }
}

// const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray'];


function renderChart() {

  let goatNames = [];
  let goatViews = [];
  let goatScore = [];
  for (let i = 0; i < allGoats.length; i++) {
    goatNames.push(allGoats[i].name);
    goatViews.push(allGoats[i].views);
    goatScore.push(allGoats[i].score);
  }
  // console.log(goatNames);

  const data = {
    labels: goatNames,
    datasets: [
      {
        label: '# of views',
        data: goatViews,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      },
      {
        label: '# of votes',
        data: goatScore,
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgb(255, 159, 64)'
        ],
        borderWidth: 1
      }
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

}



myContainer.addEventListener('click', handleClick);

renderGoats();
