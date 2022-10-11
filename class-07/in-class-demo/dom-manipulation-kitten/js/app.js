'use strict';

console.log('hi');

const kittenContainer = document.getElementById('kittenProfiles');
// get proof of life when inteereacting with the DOM:
console.log(kittenContainer);

const kittenTable = document.querySelector('table');
console.log(kittenTable);
const kittenBody = document.querySelector('table tbody');

const kittenHead = document.querySelector('table thead');
const kittenFoot = document.querySelector('table tfoot');

// DOM SELECTORS WE WILL USE
// document.getElementByID('<id from the DOM>')
// document.querySelector('<css selector>')

// METHODS TO ADD/CREATE/EDIT ELEMENTS IN THE DOM
// document.createElement('<HTML tag name>')

// <element-var-name>.textContent = '<text to add to element>'
// <parent-element>.appendChild(<var of the element you want to add>)

// Example of HTML table:
// https://www.w3schools.com/tags/tag_tbody.asp

function Kitten(name, about, src, alt, likes) {
  this.name = name;
  this.about = about;
  this.src = src;
  this.alt = alt;
  this.likes =  likes;
  this.listId = `${this.name}Likes`;
}

Kitten.prototype.renderList = function() {
  // render the list items only:
  let kittenLikes = document.getElementById(this.listId)
  for (let i = 0; i < this.likes.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${this.name} likes ${this.likes[i]}`;
    kittenLikes.appendChild(li);
  }
}

Kitten.prototype.renderTable = function() {
  let tr = document.createElement('tr');
  kittenBody.appendChild(tr);
  let tdname = document.createElement('td');
  tdname.textContent = this.name;
  tr.appendChild(tdname);
  for (let i = 0; i < this.likes.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.likes[i];
    tr.appendChild(td);
  }
}

Kitten.prototype.render = function() {
  // render the entire article
  // article
  let art = document.createElement('article');
  kittenContainer.appendChild(art);

  // h3
  let headline3 = document.createElement('h3');
  headline3.textContent = this.name;
  art.appendChild(headline3);

  // p
  let p = document.createElement('p');
  p.textContent = this.about
  art.appendChild(p);

  // ul
  let ul = document.createElement('ul');
  ul.id = this.listId;
  art.appendChild(ul);

  // img
  let img = document.createElement('img');
  img.src = this.src;
  img.alt = this.alt;
  art.appendChild(img);

  this.renderList();
  this.renderTable();
}


// Instanciate kittens
// Kitten(name, about, src, alt, likes)
let jumper = new Kitten(
  'Jumper',
  'Jumper is available for adoption',
  'images/jumper.jpeg',
  'Jumper is available for adoption',
  ['cuddling', 'lazer pointer', 'catnip']
);
//jumper.render();

let serena = new Kitten(
  'Serena',
  'Serena is a sweet kitty',
  'images/serena.jpeg',
  'Serena is a sweet kitty',
  ['string', 'feathers', 'soft beds']
);

//serena.render();

let frankie = new Kitten(
  'Frankie',
  'Frankie is adorable and is 3 months old',
  'images/frankie.jpeg',
  'Frankie is available for adoption',
  ['naps', 'treats', 'cat tree']
);
//frankie.render();
// frankie.renderTable();

let kittenArray = [jumper, serena, frankie];

for (let i = 0; i < kittenArray.length; i++) {
  kittenArray[i].render()
  // maybe add something together
}


/*
let jumper = {
  name: 'Jumper',
  about: 'Jumper is available for adoption',
  src: 'images/jumper.jpeg',
  alt: 'Jumper is available for adoption',
  likes: ['cuddling', 'lazer pointer', 'catnip'],
  listId: `${this.name}Likes`,
  renderList: function() {
    // render the list items only:
    let kittenLikes = document.getElementById(this.listId)
    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.likes[i]}`;
      kittenLikes.appendChild(li);
    }
  },
  render: function () {
    // render the entire article
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
    headline3.textContent = this.name;
    art.appendChild(headline3);

    // p
    let p = document.createElement('p');
    p.textContent = this.about
    art.appendChild(p);

    // ul
    let ul = document.createElement('ul');
    ul.id = this.listId;
    art.appendChild(ul);

    // img
    let img = document.createElement('img');
    img.src = this.src;
    img.alt = this.alt;
    art.appendChild(img);

    this.renderList();
  },

}




// let li = document.createElement('li');
// li.textContent = `6am: ${seatte.someValueInAnArry[i]} cookies`;



jumper.render();
*/
