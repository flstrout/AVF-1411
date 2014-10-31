// AVF-1411 - Project 1a
// Fred L. Strout
// Created on: 10/30/2014

var openUI = require("ui");

// Wrap the whole package in a function for stronger execution control
var netCheck = function(url){ // pass in the url from the function call for improved modularization
	
	// Create a variable to pass to the onload property of the createHTTPClient method
	var loadData = function (e){
		var remoteData = JSON.parse(this.responseText);
		//console.log(remoteData);
		var icon = remoteData.current_observation.icon_url;
		//console.log(icon);
		/*var posts = thisData.data.children;
		var postArray = [];
		
		// Loop through the remote data to extract only the desired data and push that data to its own array
		for(i=0, j=posts.length; i<j; i++){
			var post = {
				title: posts[i].data.title,
				picture: posts[i].data.thumbnail
			};
			
			// Push the extracted data to the array
			postArray.push(post);
		};
		
		// console.log(postArray);
		display.displayData(postArray);*/
		openUI.buildUI(icon);
	};
	
	// Create an alert box to display an error message for the onerror property of the createHTTPClient method
	var errorData = function (e){
		alert("Error: " + e.error);
	};
	
	// If statement to detect if the device is connected to the Network
	if (Ti.Network.online){ // If True, then
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