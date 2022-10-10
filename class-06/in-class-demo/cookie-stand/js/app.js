'use strict'

let seattleList = document.getElementById('seattleList');

console.log(seattleList);

let hours = ['6 a.m.', '7 a.m.', '8 a.m.'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); // The maximum is inclusive and the minimum is inclusive
  }
}

console.log(seattle.getRandomCustomers());
