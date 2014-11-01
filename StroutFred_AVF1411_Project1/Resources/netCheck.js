// AVF-1411 - Project 1a
// Fred L. Strout
// Created on: 10/30/2014

var openUI = require("ui");
var saveData = require("db");

// Wrap the whole package in a function for stronger execution control
var netCheck = function(url){ // pass in the url from the function call for improved modularization
	
	// Create a variable to pass to the onload property of the createHTTPClient method
	var loadData = function (e){
		var remoteData = JSON.parse(this.responseText);
		var observe = remoteData.current_observation;
		var forecast = remoteData.forecast.simpleforecast.forecastday[0];
		//console.log(remoteData);
		
		var icon = observe.icon_url;
		var location = "Forecast for: " + observe.display_location.full;
		var feels = "Feels like: " + observe.feelslike_f + "\u00B0" + "F";
		var last = observe.observation_time;
		var condition = observe.weather;
		var min_max = "Min: " + forecast.low.fahrenheit + "\u00B0" + "F/Max: " + forecast.high.fahrenheit + "\u00B0" + "F";
		var fahrenheit = observe.temp_f + "\u00B0" + "F";
		var celsius = "/" + observe.temp_c + "\u00B0" + "C";
		var humidity = observe.relative_humidity;
		var precip = observe.precip_today_in + " in.";
		var heat = observe.heat_index_f;
		var press = observe.pressure_in + " in.";
		var windSpeed = observe.wind_mph;
		var windDirection = observe.wind_dir;
		var windDegrees = observe.wind_degrees;
		
		saveData.create(icon, location, feels, last, condition, min_max, fahrenheit, celsius, humidity, precip, heat, press, windSpeed, windDirection, windDegrees);
		openUI.buildUI(icon);
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