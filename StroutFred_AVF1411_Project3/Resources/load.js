// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var loadIt = function(urlAPI){
	var getNetCheck = require("netCheck");
	// check for net and build UI elements
	getNetCheck.checkNet(urlAPI);
	
	// get timezone data from google api and pass the timezone modifier into a DB table
	/*var getTimezone = require("timezone");
	getTimezone.currentLocation();*/
};
exports.loadIt = loadIt;