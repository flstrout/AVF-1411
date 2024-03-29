// AVF-1411 - Project 2
// Fred L. Strout
// Created on: 11/6/2014

var getNetCheck = require("netCheck");
	
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
		//console.log(coordinates);
		var urlAPI = "http://api.wunderground.com/api/4af8df4427496b2f/conditions/forecast/q/" + coordinates + ".json";
		getNetCheck.checkNet(urlAPI);
	});
};
exports.currentLocation = currentLocation;