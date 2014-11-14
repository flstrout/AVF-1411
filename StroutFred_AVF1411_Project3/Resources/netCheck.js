// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

// Wrap the whole package in a function for stronger execution control
var netCheck = function(url){ // pass in the url from the function call for improved modularization
	
	// Create a variable to pass to the onload property of the createHTTPClient method
	var loadData = function (e){
		var remoteData = JSON.parse(this.responseText);
		var getShow = function(data){
			for (e in data){ 
				var date = data[e].airdate;
				var hh = parseInt(data[e].airtime.substring(0,2));
				var mm = data[e].airtime.substring(2,5);
				var length = data[e].runtime;
				var show = data[e].show.name;
				var episode = data[e].name;
				var network = data[e].show.network.name;
					
				console.log(date);
				console.log(hh);
				console.log(mm);
				console.log(length);
				console.log(show);
				console.log(episode);
				console.log(network);
			};
		};
		getShow(remoteData);
		
	};	
	// Create an alert box to display an error message for the onerror property of the createHTTPClient method
	var errorData = function (e){
		alert("Error: " + e.error);
	};
	
	// If statement to detect if the device is connected to the Network
	if (Ti.Network.online){ // If True, then
		var db = Ti.Database.open ('local');
		db.execute('DELETE FROM mod');
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
}; // netCheck function ends
exports.checkNet = netCheck;