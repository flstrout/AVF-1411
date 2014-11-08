// AVF-1411 - Project 2
// Fred L. Strout
// Created on: 11/6/2014

var buildUI = function(icon, location, feels, last, condition, min, max, fahrenheit, celsius, humidity, precip, heat, press, windSpeed, windDirection, windDegrees){
	var fSize = 16;
	
	var btnRefresh = Ti.UI.createButton({
		title: "Refresh",
		width: 80,
		height: 30,
		borderWidth: 2,
		borderRadius: 3,
		borderColor: "#09f",
		top: 90,
		left: 15
	});
	
	var compass = Ti.UI.createView({
		top: 73,
		//backgroundColor: "#08f",
		height: 114,
		width: 114,
		borderColor: "#333",
		borderWidth: 8,
		borderRadius: 57
	});
	
	var lblSpeed = Ti.UI.createLabel({
		text: Math.round(windSpeed),
		top: 45,
		font: {fontSize: fSize+4, fontWeight: "bold"},
		color: "#000"
	});
	
	var lblMPH = Ti.UI.createLabel({
		text: "mph",
		top: 70,
		font: {fontSize: fSize},
		color: "#000"
	});
	
	var lblWind = Ti.UI.createLabel({
		text: "Wind",
		top: 25,
		font: {fontSize: fSize},
		color: "#000"
	});
	compass.add(lblSpeed);
	compass.add(lblMPH);
	compass.add(lblWind);
	
	var lblDirection = Ti.UI.createImageView({
		image: "/icons/Arrow-Icon.png",
		top: 60,
		height: 140,
		width: 140
	});
	lblDirection.transform = Ti.UI.create2DMatrix().rotate(-windDirection);
	
	var lblHeat = Ti.UI.createLabel({
		text: heat,
		top: 370,
		font: {fontSize: fSize},
		left: 0,
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHeat1 = Ti.UI.createLabel({
		text: "Index",
		top: 350,
		font: {fontSize: fSize},
		left: 0,
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHeat2 = Ti.UI.createLabel({
		text: "Heat",
		top: 330,
		font: {fontSize: fSize},
		left: 0,
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPress = Ti.UI.createLabel({
		text: press + " in.",
		top: 370,
		font: {fontSize: fSize},
		left: "80%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPress1 = Ti.UI.createLabel({
		text: "Pressure",
		top: 350,
		font: {fontSize: fSize},
		left: "80%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPress2 = Ti.UI.createLabel({
		text: "Barometric",
		top: 330,
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
		left: "60%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblPrecip1 = Ti.UI.createLabel({
		text: "Precipitation",
		top: 340,
		font: {fontSize: fSize},
		left: "60%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHumidity = Ti.UI.createLabel({
		text: humidity,
		top: 360,
		font: {fontSize: fSize},
		left: "20%",
		width: "20%",
		textAlign: "center",
		color: "#000"
	});
	
	var lblHumidity1 = Ti.UI.createLabel({
		text: "Humidity",
		top: 340,
		font: {fontSize: fSize},
		left: "20%",
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
	
	var lblFahrenheit = Ti.UI.createLabel({
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
	backGround.add(lblFahrenheit);
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
	backGround.add(btnRefresh);
	backGround.add(lblDirection);
	
	var iconBG = Ti.UI.createView({
		top: backGround.top + 250,
		width: 200,
		height: 200,
		opacity: .8,
		borderRadius: 100,
		backgroundGradient: {
	        type: 'linear',
	        startPoint: { x: '50%', y: '80%' },
	        endPoint: { x: '50%', y: '100%' },
	        colors: [ { color: "#ddd", offset: 0.0} ],
		}
	});
	
	iconBG.add(compass);
	iconBG.add(lblDirection);
	
	var patch2 = Ti.UI.createView({
		backgroundColor: "#09f",
		top: 65,
		width: 170,
		height: 35
	});
	
	var iconImage = Ti.UI.createImageView({
		top: 50,
		width:182,
		height: 182
	});
	
	var imageShell = Ti.UI.createView({
		top: 45,
		width: 192,
		height: 182
	});
	//imageShell.add(iconImage);
	
	var masterView = Ti.UI.createView ();
	masterView.add(backGround);
	masterView.add(iconBG);
	masterView.add(iconImage);
	/*
	var iconImage = Ti.UI.createWebView({
		url: icon,
		top: 67,
		width:182,
		height: 140,
		backgroundColor: "#09f",
		borderRadius: 60
	});
	
	if (Ti.Platform.osname === "android"){
		iconImage.width = 135;
		iconImage.heigth = 135;
	};
	*/
	
	window.add(masterView);
	
	btnRefresh.addEventListener("click", function(){
		masterView.remove(backGround);
		masterView.remove(iconBG);
		masterView.remove(iconImage);
		
		getLocation.currentLocation();
	});
	
	// Animate the Weather Icon
	var loaderIndex=1; // initialize the index to 1
	function loadingAnimation(){ // called by the setInterval function
		
		iconImage.image = icon + loaderIndex + ".png";
		loaderIndex++;
		if(loaderIndex===25)loaderIndex=1;
	}
	 
	// start the setInverval -- adjust the time to make a smooth animation
	var loaderAnimate = setInterval(loadingAnimation,30);
	
};
exports.buildUI = buildUI;