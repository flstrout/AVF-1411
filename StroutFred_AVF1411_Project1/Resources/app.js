// AVF-1411 - Project 1a
// Fred L. Strout
// Created on: 10/30/2014

var getNetCheck = require("netCheck");
var getLocation = require("location");

Ti.Database.install("/database/localDataDB.sqlite", "localData");

getLocation.currentLocation();
//console.log(lat+","+lon);
//var urlAPI = "http://api.wunderground.com/api/4af8df4427496b2f/conditions/forecast/q/LA/Rayne.json";



//console.log(getLocation);

//getNetCheck.checkNet(urlAPI);

var window = Ti.UI.createWindow({
	backgroundColor: "#09f"
});

window.open();