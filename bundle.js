(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
