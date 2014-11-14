// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var buildUI = function(d){
	var i;
	for (i=0; i < d.length; i++){
		
		var network_LBL = Ti.UI.createLabel({
			text: d[i].network,
			top: 3,
			left: 4
		});
		
		var show_LBL = Ti.UI.createLabel({
			text: d[i].show + ": " + d[i].episode,
			top: 25,
			left: 4,
			font: {fontSize: 16, fontWeight: "bold"}
		});
		
		var tLength_LBL = Ti.UI.createLabel({
			text: d[i].tLength,
			top: 25,
			right: 4
		});
		
		var hh_LBL = Ti.UI.createLabel({
			text: d[i].hh + d[i].mm + "  /  " + d[i].date,
			top: 3,
			right: 4,
		});
		
		var dataContainer = Ti.UI.createView({
			top: 5,
			width: "90%",
			height: 50,
			borderColor: "#333",
			borderRadius: 3,
			borderWidth: 2,
			backgroundColor: "#ddd"
		});
		
		dataContainer.add(network_LBL);
		dataContainer.add(show_LBL);
		dataContainer.add(tLength_LBL);
		dataContainer.add(hh_LBL);
	};
	
	window.add(dataContainer);
};
exports.buildUI = buildUI;