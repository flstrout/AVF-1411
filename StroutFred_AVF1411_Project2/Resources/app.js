// AVF-1411 - Project 2
// Fred L. Strout
// Created on: 11/6/2014

var loginCloud = require("cloud");
var getLocation = require("location");

Ti.Database.install("/database/localDataDB.sqlite", "localData");

var window = Ti.UI.createWindow({
	backgroundImage: "/images/wallpaper.jpg",
	backgroundColor: "#09f"
});

window.open();