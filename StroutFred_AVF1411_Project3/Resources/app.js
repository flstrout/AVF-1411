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

var window = Ti.UI.createWindow({
	backgroundColor: "#0f9",
	title: "TV Shows",
	layout: "vertical",
	top: 25
});
Titanium.UI.setBackgroundColor("#0f9");
window.open();
