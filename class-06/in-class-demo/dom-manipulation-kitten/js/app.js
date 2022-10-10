'use strict';

console.log('hi');

const kittenContainer = document.getElementById('kittenProfiles');

// get proof of life when inteereacting with the DOM:
console.log(kittenContainer);


// TO ADD ELEMENTS TO THE DOM
// 1 - create the element (the html tag)

// declaring a variable to story the element that I will create
// call document.createElement
// pass it the name of the HTML element I want to create & put it in quotes
let art = document.createElement('article');

// 2 - given content (text? an image?, another element?)

// 3 - append it to the DOM
// kittenContainer is the parent element of the element we want add
// we call appendChild on the parent
// and pass in the element we want to add
kittenContainer.appendChild(art);

// h3
let headline3 = document.createElement('h3');
headline3.textContent = 'Jumper';
art.appendChild(headline3);

// p
let p = document.createElement('p');
p.textContent = 'Jumper is available for adoption'
art.appendChild(p);

// ul
let ul = document.createElement('ul');
art.appendChild(ul);

// img
let img = document.createElement('img');
img.src = 'images/jumper.jpeg';
img.alt = 'Jumper is available for adoption';
art.appendChild(img);


// let li = document.createElement('li');
// li.textContent = `6am: ${seatte.someValueInAnArry[i]} cookies`;

let jumper = {
  name: 'Jumper',
  likes: ['cuddling', 'lazer pointer', 'catnip'],
  render: function () {
    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.likes[i]}`;
      ul.appendChild(li);
    }
  }
}

jumper.render();
