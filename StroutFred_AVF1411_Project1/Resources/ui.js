// AVF-1411 - Project 1a
// Fred L. Strout
// Created on: 10/30/2014

var buildUI = function(icon, location, feels, last, condition, min, max, fahrenheit, celsius, humidity, precip, heat, press, windSpeed, windDirection, windDegrees){
	var fSize = 16;
	
	var lblSpeed = Ti.UI.createLabel({
		text: windSpeed + " mph",
		top: 340,
		font: {fontSize: fSize},
		color: "#000"
	});
	
	var lblDirection = Ti.UI.createLabel({
		text: windDirection,
		top: 360,
		font: {fontSize: fSize},
		color: "#000"
	});
	
	var lblWind = Ti.UI.createLabel({
		text: "Wind",
		top: 320,
		font: {fontSize: fSize},
		color: "#000"
	});
	
	var lblHeat = Ti.UI.createLabel({
		text: heat,
		top: 360,
		font: {fontSize: fSize},
		left: "60%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHeat1 = Ti.UI.createLabel({
		text: "Index",
		top: 340,
		font: {fontSize: fSize},
		left: "60%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHeat2 = Ti.UI.createLabel({
		text: "Heat",
		top: 320,
		font: {fontSize: fSize},
		left: "60%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPress = Ti.UI.createLabel({
		text: press + " in.",
		top: 360,
		font: {fontSize: fSize},
		left: "80%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPress1 = Ti.UI.createLabel({
		text: "Pressure",
		top: 340,
		font: {fontSize: fSize},
		left: "80%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPress2 = Ti.UI.createLabel({
		text: "Barometric",
		top: 320,
		font: {fontSize: fSize},
		left: "80%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPrecip = Ti.UI.createLabel({
		text: precip + " in.",
		top: 360,
		font: {fontSize: fSize},
		left: "20%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPrecip1 = Ti.UI.createLabel({
		text: "Precipitation",
		top: 340,
		font: {fontSize: fSize},
		left: "20%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHumidity = Ti.UI.createLabel({
		text: humidity,
		top: 360,
		font: {fontSize: fSize},
		left: 0,
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHumidity1 = Ti.UI.createLabel({
		text: "Humidity",
		top: 340,
		font: {fontSize: fSize},
		left: 0,
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var botBar = Ti.UI.createView({
		backgroundColor: "#333",
		top: 310, left: 8, right: 8,
		height: 2
	});
	
	var lblFeels = Ti.UI.createLabel({
		text: "Feels like " + feels + "\u00b0" + "F",
		top: 285,
		font: {fontSize: fSize},
		left: 15,
		color: "#000"
	});
	
	var lblCelsius = Ti.UI.createLabel({
		text: "/" + celsius + "\u00b0" + "C",
		top: 285,
		font: {fontSize: fSize},
		right: 15,
		color: "#000"
	});
	
	var lblfahrenheit = Ti.UI.createLabel({
		text: fahrenheit + "\u00b0" + "F",
		top: 100,
		font: {fontSize: 130},
		color: "#000"
	});
	
	var lblMinMax = Ti.UI.createLabel({
		text: "Min: " + min + "\u00b0" + "F/Max: " + max + "\u00b0" + "F",
		top: 65,
		font: {fontSize: fSize},
		right: 15,
		color: "#000"
	});
	
	var lblLast = Ti.UI.createLabel({
		text: last,
		top: 65,
		font: {fontSize: fSize},
		left: 15,
		color: "#000"
	});
	
	var topBar = Ti.UI.createView({
		backgroundColor: "#333",
		top: 60, left: 8, right: 8,
		height: 2
	});
	
	var lblCondition = Ti.UI.createLabel({
		text: condition,
		top: 20,
		font: {fontSize: 20},
		right: 15,
		color: "#000"
	});
	
	var lblLocation = Ti.UI.createLabel({
		text: location,
		top: 15,
		font: {fontSize: 26},
		left: 15,
		color: "#000"
	});
	
	var backGround = Ti.UI.createView({
		top: 150,
		backgroundColor: "#ddd",
		height: 410,
		width: "95%",
		opacity: .8,
		borderRadius: 30
	});
	
	backGround.add(lblLocation);
	backGround.add(lblCondition);
	backGround.add(topBar);
	backGround.add(lblLast);
	backGround.add(lblMinMax);
	backGround.add(lblfahrenheit);
	backGround.add(lblCelsius);
	backGround.add(lblFeels);
	backGround.add(botBar);
	backGround.add(lblHumidity1);
	backGround.add(lblHumidity);
	backGround.add(lblPrecip1);
	backGround.add(lblPrecip);
	backGround.add(lblPress2);
	backGround.add(lblPress1);
	backGround.add(lblPress);
	backGround.add(lblHeat2);
	backGround.add(lblHeat1);
	backGround.add(lblHeat);
	backGround.add(lblWind);
	backGround.add(lblDirection);
	backGround.add(lblSpeed);
	
	var iconBG = Ti.UI.createView({
		top: 65,
		backgroundColor: "#333",
		width: 170,
		height: 92,
		borderRadius: 25
	});
	
	var patch2 = Ti.UI.createView({
		backgroundColor: "#09f",
		top: 65,
		width: 170,
		height: 35
	});
	
	var iconImage = Ti.UI.createWebView({
		url: icon,
		top: 67,
		width:182,
		height: 140,
		backgroundColor: "#09f",
		borderRadius: 60
	});
	
	window.add(backGround);
	//window.add(iconBG);
	window.add(patch2);
	window.add(iconImage);
};
exports.buildUI = buildUI;