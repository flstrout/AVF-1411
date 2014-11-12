// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

// load the Cloud Module in Development Mode
var myCloud = require('ti.cloud');
myCloud.debug = true;

// Login User to the Cloud Service
var loginUser = function(){
	
	myCloud.Users.login({
		login: "FredStrout617@fullsail.edu",
		password: "Dennis44!"
	}, function(e){
		if (e.success){
			getLocation.currentLocation();
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; // loginUser function ends

// Update the Cloud Custom Object
var updateCloud = function(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17){
	myCloud.Objects.create({
		classname: "history",
		fields: {
			icon: p1,
			location: p2,
			feels: p3,
			last: p4,
			condition: p5,
			min: p6,
			max: p7,
			fahrenheit: p8,
			celsius: p9,
			humidity: p10,
			precip: p11,
			heat: p12,
			press: p13,
			windSpeed: p14,
			windDirection: p15,
			windDegrees: p16,
			night: p17
		}
	}, function(e){
		if (e.success){
			alert("Titanium Cloud Updated");
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		};
	});
}; // updateCloud function ends
exports.updateCloud = updateCloud;