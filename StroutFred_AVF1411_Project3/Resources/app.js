// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var date = "";
var getDate = require("date");
var getNetCheck = require("netCheck");

getDate.todayDate(1);
console.log(date);
var urlAPI = "http://api.tvmaze.com/schedule?country=US&date="+date;

getNetCheck.checkNet(urlAPI);

Titanium.UI.setBackgroundColor('#000');