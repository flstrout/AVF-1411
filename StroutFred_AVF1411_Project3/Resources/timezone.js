// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var apiKey = "AIzaSyCskVBpaWEWgR2CABHKQ1coss0fT6c6o24";
var date = new Date();
var epoch = Math.round(date.getTime() / 1000);
var timezoneDB = require("tzModDB");

var loadData = function (e){
	var remoteData = JSON.parse(this.responseText);
	var timezone = remoteData.timeZoneName;
	timezoneDB.create("test");
	console.log("From function: " + timezone);
};

var errorData = function (e){
		alert("Error: " + e.error);
	};
	
var getLocalTime = function(url){
	var remoteData = Ti.Network.createHTTPClient({
			onload: loadData,
			onerror: errorData
		});
		remoteData.open("GET", url);
		remoteData.send();
};

var currentLocation = function(){
	Ti.Geolocation.ACCURACY_HIGH;
	Ti.Geolocation.getCurrentPosition(function(e){
		if (Ti.Platform.osname != "android"){
			var lat = e.coords.latitude;
			var lon = e.coords.longitude;
		}else{
			
			var lat = 37.3318;
			var lon = -122.029583;
		};
		var coordinates = lat + "," + lon;
		// console.log(coordinates);
		var urlAPI = "https://maps.googleapis.com/maps/api/timezone/json?location=" + coordinates + "&timestamp=" + epoch + "&key=" + apiKey;
		// console.log(urlAPI);
		getLocalTime(urlAPI);
		//console.log(loadData);
	});
	
};
exports.currentLocation = currentLocation;

