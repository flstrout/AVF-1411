// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

Ti.Database.install("/database/timezone.sqlite", "local");

var date = "";

var getDate = require("date");
var getNetCheck = require("netCheck");
getDate.todayDate(0);
//console.log(date);
var urlAPI = "http://api.tvmaze.com/schedule?country=US&date="+date;

getNetCheck.checkNet(urlAPI);

var getTimezone = require("timezone");
getTimezone.currentLocation();

Titanium.UI.setBackgroundColor('#000');