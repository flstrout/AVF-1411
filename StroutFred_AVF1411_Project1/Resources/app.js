// AVF-1411 - Project 1a
// Fred L. Strout
// Created on: 10/30/2014

var urlAPI = "http://api.wunderground.com/api/4af8df4427496b2f/conditions/q/LA/Rayne.json";
var getNetCheck = require("netCheck");

Ti.Database.install("/database/localDataDB.sqlite", "localData");

getNetCheck.checkNet(urlAPI);

var window = Ti.UI.createWindow({
	backgroundColor: "#09f"
});

window.open();