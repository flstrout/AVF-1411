// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var getDetail = require("detail");
var fSize = 14;
var defOp = .8;

var buildUI = function(d){
	var i;
	//for (i=0; i < d.length; i++){
	var shows = Ti.UI.createTableView({
		top: 45,
		backgroundColor: "#bf0c0c",
		separatorColor: "#bf0c0c"
	});
	var list = [];
	var tableSection = Ti.UI.createTableViewSection();
	list.push(tableSection);
	for (o in d){ 
		var sectionDetail = Ti.UI.createTableViewRow({
			id: d[o].epID,
			title: d[o].show,
			/*date: d[o].date,
			problem: d[o].problem,
			promise: d[o].promise,
			manager: d[o].manager,*/
			hasChild: true,
			backgroundColor: "#eee"
		});
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
			console.log(event.source.id +" : "+event.source.title);
			getDetail.loadDetail(event.source);
		});
		masterView.add(shows);
	};
	
exports.buildUI = buildUI;
