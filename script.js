var fs = require('fs');
var allthewords = fs.readFileSync('allthewords.txt').toString().split('\n');
var foods = fs.readFileSync('foods.txt').toString().split("\n");
var adjectives = fs.readFileSync('adjectives.txt').toString().split('\n');
var tech = fs.readFileSync('tech.txt').toString().split('\n');

//get random element from array
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
}

//capitalize string
String.prototype.cap = function() {
  return this[0].toUpperCase() + this.slice(1);
}

function invest(company) {
  //if the company hasn't been invested in yet take away money and change the company in the dictionary to true
  if (!dict[company]) {
    localStorage.money -= 10000;
    dict[company] = true;
  } else {
    alert("You have already invested in " + company + ".");
  }
}

function randomCompany() {
  return(allthewords.randomElement());
}