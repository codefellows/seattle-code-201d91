'use strict';

console.log('hi');

let booleanValue = true;

if (booleanValue) {
  console.log('if condition is true this will print in the console');
}

/*

&& — is the 'logical and'
One false with an && and it will not run

|| — is the 'logical or' (double pipe)
One true and it will run

! - 'logical not' often called 'bang'


*/

let trueValue = true;
let falseValue = false;

if (trueValue || falseValue) {
  console.log('it evaluated to true');
}

let username = prompt('What is your name?');
console.log(username);

let likesStarWars = prompt('Do I like Star Wars?').toLowerCase();

// console.log(likesStarWars);
// likesStarWars = likesStarWars.toLowerCase();
// console.log(likesStarWars);

if (likesStarWars === 'yes' || likesStarWars === 'y') {
  console.log('You are correct. I do like Star Wars');
} else if (likesStarWars === 'no' || likesStarWars === 'n') {
  console.log('That is incorrect. I do like Star Wars');
} else {
  console.log('You need to answer with a Yes or a No');
}
