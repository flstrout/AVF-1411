// AVF-1411 - Project 2
// Fred L. Strout
// Created on: 11/6/2014

var getLocation = require("location");

Ti.Database.install("/database/localDataDB.sqlite", "localData");

getLocation.currentLocation();

var window = Ti.UI.createWindow({
	backgroundColor: "#09f"
});

window.open();