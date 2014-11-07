// AVF-1411 - Project 1a
// Fred L. Strout
// Created on: 10/30/2014

var openUI = require("ui");
var tblConditions = [];

var read = function(){
	var db = Ti.Database.open("localData");
	db.execute("CREATE TABLE IF NOT EXISTS tblData (id INTEGER PRIMARY KEY , icon TEXT, location TEXT, feels TEXT, last TEXT, condition TEXT, min TEXT, max TEXT, fahrenheit TEXT, celsius TEXT, humidity TEXT, precip TEXT, heat TEXT, press TEXT, windSpeed TEXT, windDirection TEXT, windDegrees TEXT)");
	var dbRows = db.execute("SELECT id, icon, location, feels, last, condition, min, max, fahrenheit, celsius, humidity, precip, heat, press, windSpeed, windDirection, windDegrees FROM tblData");
	while (dbRows.isValidRow()){
		tblConditions.push({
			id: dbRows.fieldByName("id"),
			icon: dbRows.fieldByName("icon"),
			location: dbRows.fieldByName("location"),
			feels: dbRows.fieldByName("feels"),
			last: dbRows.fieldByName("last"),
			condition: dbRows.fieldByName("condition"),
			min: dbRows.fieldByName("min"),
			max: dbRows.fieldByName("max"),
			fahrenheit: dbRows.fieldByName("fahrenheit"),
			celsius: dbRows.fieldByName("celsius"),
			humidity: dbRows.fieldByName("humidity"),
			precip: dbRows.fieldByName("precip"),
			heat: dbRows.fieldByName("heat"),
			press: dbRows.fieldByName("press"),
			windSpeed: dbRows.fieldByName("windSpeed"),
			windDirection: dbRows.fieldByName("windDirection"),
			windDegrees: dbRows.fieldByName("windDegrees")
		});
		dbRows.next();
	}
	dbRows.close();
	db.close();
	var a = tblConditions[0];
	//console.log(tblConditions);
	openUI.buildUI(a.icon, a.location, a.feels, a.last, a.condition, a.min, a.max, a.fahrenheit, a.celsius, a.humidity, a.precip, a.heat, a.press, a.windSpeed, a.windDirection, a.windDegrees);
	
};
exports.read = read;

var create = function (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16){

	var db = Ti.Database.open("localData");
	db.execute("CREATE TABLE IF NOT EXISTS tblData (id INTEGER PRIMARY KEY , icon TEXT, location TEXT, feels TEXT, last TEXT, condition TEXT, min TEXT, max TEXT, fahrenheit TEXT, celsius TEXT, humidity TEXT, precip TEXT, heat TEXT, press TEXT, windSpeed TEXT, windDirection TEXT, windDegrees TEXT)");
	db.execute("INSERT INTO tblData (icon, location, feels, last, condition, min, max, fahrenheit, celsius, humidity, precip, heat, press, windSpeed, windDirection, windDegrees) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16);
	var rowID = db.lastInsertRowId;
	db.close();
	tblConditions = [];
	read();
	
};
exports.create = create;

var update = function (p1, p2, p3, p4, p5, p6, p7){

	var db = Ti.Database.open("localData");
	db.execute("UPDATE tblData SET customer=?, date=?, store=?, manager=?, problem=?, promise=? WHERE id=?", p1, p2, p3, p4, p5, p6, p7);
	db.close();
	tblConditions = [];
	read();
};
exports.update = update;

var del = function(id){
	var db = Ti.Database.open("localData");
	db.execute("DELETE FROM tblData WHERE id=?", id);
	db.close();
	tblConditions = [];
	read();
};
exports.del = del;

exports.tblConditions = tblConditions;
//console.log(tblConditions);