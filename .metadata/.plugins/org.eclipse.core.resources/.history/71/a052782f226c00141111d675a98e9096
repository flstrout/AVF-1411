// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

Ti.Database.install("/database/local.sqlite", "local");
var getNew = require("new");

var tblSavedData = [];

var read = function(){
	var db1 = Ti.Database.open("local");
	db1.execute("CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, problem TEXT, promise TEXT)");
	var db1Rows = db1.execute("SELECT id, customer, date, store, manager, problem, promise FROM data");
	while (db1Rows.isValidRow()){
		tblSavedData.push({
			id: db1Rows.fieldByName("id"),
			customer: db1Rows.fieldByName("customer"),
			date: db1Rows.fieldByName("date"),
			store: db1Rows.fieldByName("store"),
			manager: db1Rows.fieldByName("manager"),
			problem: db1Rows.fieldByName("problem"),
			promise: db1Rows.fieldByName("promise")
		});
		db1Rows.next();
	}
	db1Rows.close();
	db1.close();
};
exports.read = read;

var create = function (p1, p2, p3, p4, p5, p6){
	var db1 = Ti.Database.open("local");
	db1.execute("CREATE TABLE IF NOT EXISTS data (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, problem TEXT, promised TEXT)");
	db1.execute("INSERT INTO data (customer, date, store, manager, problem, promise) VALUES (?, ?, ?, ?, ?, ?)", p1, p2, p3, p4, p5, p6);
	var rowID = db1.lastInsertRowId;
	db1.close();
	tblSavedData = [];
	read();
};
exports.create = create;

var update = function (p1, p2, p3, p4, p5, p6, p7){
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
exports.del = del;

exports.tblSavedData = tblSavedData;
