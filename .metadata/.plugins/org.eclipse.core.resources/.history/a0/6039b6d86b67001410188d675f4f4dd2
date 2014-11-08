// AVF-1411 - Project 2
// Fred L. Strout
// Created on: 11/6/2014

var saveData = require("db");

// Wrap the whole package in a function for stronger execution control
var netCheck = function(url){ // pass in the url from the function call for improved modularization
	
	// Create a variable to pass to the onload property of the createHTTPClient method
	var loadData = function (e){
		var remoteData = JSON.parse(this.responseText);
		var observe = remoteData.current_observation;
		var forecast = remoteData.forecast.simpleforecast.forecastday[0];
		console.log(remoteData);
		
		var icon = observe.icon;
		var location = observe.display_location.full;
		var feels = observe.feelslike_f;
		var last = observe.observation_time;
		var condition = observe.weather;
		var min = forecast.low.fahrenheit;
		var max = forecast.high.fahrenheit;
		var fahrenheit = observe.temp_f;
		var celsius = observe.temp_c;
		var humidity = observe.relative_humidity;
		var precip = observe.precip_today_in;
		var heat = observe.heat_index_f;
		var press = observe.pressure_in;
		var windSpeed = observe.wind_mph;
		var windDirection = observe.wind_dir;
		var windDegrees = observe.wind_degrees;
		if(observe.observation_time_rfc822.substring(17, 19) >= 18 || observe.observation_time_rfc822.substring(17, 19) <= 5){
			var night = true;
		} else {
			var night = false;
		};
	
		// Could do a select case here - might revisit that	
		if (icon === "clear" || icon === "sunny"){
			if (night === false){
				var ico = "/icons/Sun/Sun";
			} else {
				var ico = "/icons/Moon/Moon";
			};
		} else if (icon === "chancerain" || icon === "rain"){
			var ico = "/icons/Rain/Rain";
		} else if (icon === "tstorms" || icon === "unknown"){
			var ico = "/icons/Lightning/Lightning";
		} else if (icon === "cloudy"){
			var ico = "/icons/Overcast/Overcast";
		} else {
			if (night === false){
				var ico = "/icons/PartlyCloudy/PartlyCloudy";
			} else {
				var ico = "/icons/MoonCloudy/MoonCloudy";
			};
		};
		
		saveData.create(ico, location, feels, last, condition, min, max, fahrenheit, celsius, humidity, precip, heat, press, windSpeed, windDirection, windDegrees, night);
		loginCloud.updateCloud(ico, location, feels, last, condition, min, max, fahrenheit, celsius, humidity, precip, heat, press, windSpeed, windDirection, windDegrees, night);
	};
	
	// Create an alert box to display an error message for the onerror property of the createHTTPClient method
	var errorData = function (e){
		alert("Error: " + e.error);
	};
	
	// If statement to detect if the device is connected to the Network
	if (Ti.Network.online){ // If True, then
		var db = Ti.Database.open ('localData');
		db.execute('DELETE FROM tblData');
		db.close();
		
		var remoteData = Ti.Network.createHTTPClient({
			onload: loadData,
			onerror: errorData
		});
		remoteData.open("GET", url);
		remoteData.send();
		
	}else{ // If False, then
		alert("Network unavailable. Check your settings.");
	};
};

exports.checkNet = netCheck;