// AVF-1411 - Project 2
// Fred L. Strout
// Created on: 11/6/2014

// load the Cloud Module
var myCloud = require('ti.cloud');

// Development mode
myCloud.debug = true;

// Login User to the Cloud Service
var loginUser = function(){
	myCloud.Users.login({
		login: "FredStrout617@fullsail.edu",
		password: "Dennis44!"
	}, function(e){
		
		// use .info method to view login info in the Console, if successful
		if (e.success){
			var user = e.users[0];
			Ti.API.info('Success!\n' + 
				'ACS User ID: ' + user.id + '\n' + 
				'ACS App sessionId: ' + myCloud.sessionId + '\n' + 
				'ACS App Username: ' + user.username);
		} else {
			alert((e.error && e.message) || JSON.stringify(e));
		}
	});
}; // Login User ends - I like this method of labeling the end of a function

// Call loginUser function
loginUser();