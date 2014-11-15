// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var background = require("background");

var date = "";
var getDate = require("date");
var getNetCheck = require("netCheck");

// pass the desired date to the todayDate function - 0=today, 1=tomorrow, etc...
getDate.todayDate(1);

// concatenate the date into the url variable
var urlAPI = "http://api.tvmaze.com/schedule?country=US&date="+date;

// check for net and build UI elements
getNetCheck.checkNet(urlAPI);

// get timezone data from google api and pass the timezone modifier into a DB table
/*var getTimezone = require("timezone");
getTimezone.currentLocation();*/

// create masterView(Scroll View) and Window Shell
var masterView = Ti.UI.createScrollView({
	//backgroundColor: color,
	scrollType: "vertical",
	layout: "vertical",
	top: 5
});

var lblTitle = Ti.UI.createLabel({
	text: "Primetime Channel Lineup",
	font: {fontSize: 22, fontWeight: "bold"},
	top: 2
});

var lblDate = Ti.UI.createLabel({
	text: date.substring(5,7) + "/" + date.substring(8,12) + "/" + date.substring(0,4),
	font: {fontSize: 32, fontWeight: "bold"}
});

var titleFrame = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 70, width: 300,
	borderRadius: 20,
	top: 15,
	opacity: .8,
	layout: "vertical"
});
titleFrame.add(lblTitle);
titleFrame.add(lblDate);
var window = Ti.UI.createWindow({
	//backgroundColor: color,
	layout: "vertical",
	top: 5
});
window.add(titleFrame);
window.add(masterView);

window.open();