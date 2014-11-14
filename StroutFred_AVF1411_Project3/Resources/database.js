// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var ui = require("ui");
var tblSavedData = [];

var read = function(){
	var db1 = Ti.Database.open("local");
	db1.execute("CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY , date TEXT, hh TEXT, mm TEXT, length TEXT, show TEXT, episode TEXT, network TEXT)");
	var db1Rows = db1.execute("SELECT id, date, hh, mm, length, show, episode, network FROM data");
	while (db1Rows.isValidRow()){
		tblSavedData.push({
			id: db1Rows.fieldByName("id"),
			date: db1Rows.fieldByName("date"),
			hh: db1Rows.fieldByName("hh"),
			mm: db1Rows.fieldByName("mm"),
			tLength: db1Rows.fieldByName("length"),
			show: db1Rows.fieldByName("show"),
			episode: db1Rows.fieldByName("episode"),
			network: db1Rows.fieldByName("network")
		});
		db1Rows.next();
	}
	db1Rows.close();
	db1.close();
	ui.buildUI(tblSavedData);
	//console.log(tblSavedData);
};
exports.read = read;

var create = function (p1, p2, p3, p4, p5, p6, p7){
	var db1 = Ti.Database.open("local");
	db1.execute("CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY , date TEXT, hh TEXT, mm TEXT, length TEXT, show TEXT, episode TEXT, network TEXT)");
	db1.execute("INSERT INTO data (date, hh, mm, length, show, episode, network) VALUES (?, ?, ?, ?, ?, ?, ?)", p1, p2, p3, p4, p5, p6, p7);
	var rowID = db1.lastInsertRowId;
	db1.close();
	tblSavedData = [];
	read();
};
exports.create = create;

/*var update = function (p1, p2, p3, p4, p5, p6, p7){
	var db1 = Ti.Database.open("local");
	db1.execute("UPDATE data SET customer=?, date=?, store=?, manager=?, problem=?, promise=? WHERE id=?", p1, p2, p3, p4, p5, p6, p7);
	db1.close();
	tblSavedData = [];
	read();
};
exports.update = update;

var del = function(id){
	var db1 = Ti.Database.open("local");
	db1.execute("DELETE FROM data WHERE id=?", id);
	db1.close();
	tblSavedData = [];
	read();
};
exports.del = del;*/

exports.tblSavedData = tblSavedData;
