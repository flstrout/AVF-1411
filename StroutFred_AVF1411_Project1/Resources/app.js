// AVF-1411 - Project 1a
// Fred L. Strout
// Created on: 10/30/2014

var getNetCheck = require("netCheck");


Ti.Geolocation.getCurrentPosition(function(e){
	console.log(e.coords.latitude);
});


var urlAPI = "http://api.wunderground.com/api/4af8df4427496b2f/conditions/forecast/q/LA/Rayne.json";

Ti.Database.install("/database/localDataDB.sqlite", "localData");

//console.log(getLocation);

getNetCheck.checkNet(urlAPI);

var window = Ti.UI.createWindow({
	backgroundColor: "#09f"
});

window.open();