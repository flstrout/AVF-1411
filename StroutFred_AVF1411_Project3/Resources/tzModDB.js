// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var tzMod = [];

var read = function(){
	var db1 = Ti.Database.open("local");
	db1.execute("CREATE TABLE IF NOT EXISTS mod (id INTEGER PRIMARY KEY , modifier TEXT)");
	var db1Rows = db1.execute("SELECT id, modifier FROM mod");
	while (db1Rows.isValidRow()){
		tzMod.push({
			id: db1Rows.fieldByName("id"),
			modifier: db1Rows.fieldByName("modifier")
		}); // end push
		db1Rows.next();
	} // end while loop
	db1Rows.close();
	db1.close();
	console.log(tzMod.modifier);
}; // end read function
exports.read = read;

var create = function (p1){
	var db1 = Ti.Database.open("local");
	db1.execute("CREATE TABLE IF NOT EXISTS mod (id INTEGER PRIMARY KEY , modifier TEXT)");
	db1.execute("INSERT INTO mod (modifier) VALUES (?)", p1);
	var rowID = db1.lastInsertRowId;
	db1.close();
	tzMod = [];
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

exports.tzMod = tzMod;
