// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var getDetail = require("detail");
var fSize = 14;
var defOp = .8;

var buildUI = function(d){
	
	// create masterView(Scroll View) and Window Shell
var masterView = Ti.UI.createScrollView({
	//backgroundColor: color,
	scrollType: "vertical"
});

var lblTitle = Ti.UI.createLabel({
	text: "Primetime Channel Lineup",
	font: {fontSize: 22, fontWeight: "bold"},
	top: 2
});

var lblDate = Ti.UI.createLabel({
	text: date.substring(5,7) + "/" + date.substring(8,12) + "/" + date.substring(0,4),
	font: {fontSize: 32, fontWeight: "bold"}
});

var titleFrame = Ti.UI.createView({
	backgroundColor: "#fff",
	height: 70, width: 300,
	borderRadius: 20,
	top: 15,
	opacity: .8,
	layout: "vertical"
});
	
	var i;
	//for (i=0; i < d.length; i++){
	var shows = Ti.UI.createTableView({
		top: 45,
		backgroundColor: "#000",
		separatorColor: "#09f",
		width: "85%",
		borderRadius: 6
	});
	var list = [];
	var tableSection = Ti.UI.createTableViewSection();
	list.push(tableSection);
	for (o in d){ 
		var sectionDetail = Ti.UI.createTableViewRow({
			showTitle: d[o].show,
			episode: d[o].episode,
			id1: d[o].id1,
			hasChild: true,
			backgroundColor: "#eee",
			height: 60
		});
		// converts 24 hour time (military time) to 12 hour time.
		if (d[o].hh > 12){
			var ampm = "pm";
		}else{
			var ampm = "am";
		};
		
		if (d[o].hh === "00"){
			var HH = 12;
		}else if (d[o].hh >12){
			var HH = d[o].hh - 12;
		}else{
			var HH = d[o].hh;
		};
		var lblShow = Ti.UI.createLabel({
			text: d[o].show+": "+d[o].episode,
			showTitle: d[o].show,
			episode: d[o].episode,
			id1: d[o].id1,
			font:{fontSize: 22},
			top: 25,
			left: 20,
			width: "75%"
		});
		var lblNetwork = Ti.UI.createLabel({
			text: d[o].network,
			showTitle: d[o].show,
			episode: d[o].episode,
			id1: d[o].id1,
			top: 5,
			left: 20
		});
		var lblTime = Ti.UI.createLabel({
			text: HH+d[o].mm+" "+ampm,
			showTitle: d[o].show,
			episode: d[o].episode,
			id1: d[o].id1,
			top: 5,
			right: 20
		});
		var lblDuration = Ti.UI.createLabel({
			text: Math.floor(d[o].tLength)+" min",
			showTitle: d[o].show,
			episode: d[o].episode,
			id1: d[o].id1,
			top: 25,
			right: 20
		});
		sectionDetail.add(lblShow);
		sectionDetail.add(lblNetwork);
		sectionDetail.add(lblTime);
		sectionDetail.add(lblDuration);
		tableSection.add(sectionDetail);
		exports.sectionDetail = sectionDetail;
	};
		/*// converts 24 hour time (military time) to 12 hour time.
		if (d[i].hh > 12){
			var ampm = "pm";
		}else{
			var ampm = "am";
		};
		
		if (d[i].hh === "00"){
			var HH = 12;
		}else if (d[i].hh >12){
			var HH = d[i].hh - 12;
		}else{
			var HH = d[i].hh;
		};

		var network_LBL = Ti.UI.createLabel({
			text: d[i].network,
			top: 3,
			left: 4,
			font: {fontSize: fSize}
		});
		
		var show_LBL = Ti.UI.createLabel({
			text: d[i].show + ": " + d[i].episode,
			top: 25,
			left: 4,
			width: "78%",
			font: {fontSize: 16, fontWeight: "bold"}
		});
		console.log(d[i].show);
		var tLength_LBL = Ti.UI.createLabel({
			text: Math.floor(d[i].tLength) + " min",
			top: 27,
			right: 4,
			font: {fontSize: fSize}
		});
		
		var hh_LBL = Ti.UI.createLabel({
			text: HH + d[i].mm + " " + ampm,
			top: 3,
			right: 4,
			font: {fontSize: fSize}
		});
		
		var dataContainer = Ti.UI.createView({
			top: 5,
			width: "90%",
			height: 50,
			borderColor: "#333",
			borderRadius: 3,
			borderWidth: 2,
			backgroundColor: "#fff",
			opacity: defOp
		});
		
		dataContainer.add(network_LBL);
		dataContainer.add(show_LBL);
		dataContainer.add(tLength_LBL);
		dataContainer.add(hh_LBL);
		dataContainer.addEventListener("click", function(event){
			detWin();
		});*/
		shows.setData(list);
		shows.addEventListener("click", function(event){
			//console.log(event.source.id +" : "+event.source.title);
			getDetail.loadDetail(event.source);
		});
		titleFrame.add(lblTitle);
titleFrame.add(lblDate);
var window = Ti.UI.createWindow({
	//backgroundColor: color,
	layout: "vertical",
	top: 5
});
window.add(titleFrame);
window.add(masterView);
masterView.add(shows);
window.open();
		
};
	
exports.buildUI = buildUI;
