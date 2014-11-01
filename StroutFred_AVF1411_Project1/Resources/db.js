var tblConditions = [];

var read = function(){
	var db1 = Ti.Database.open("localData");
	db1.execute("CREATE TABLE IF NOT EXISTS conditions (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, problem TEXT, promise TEXT)");
	var db1Rows = db1.execute("SELECT id, customer, date, store, manager, problem, promise FROM conditions");
	while (db1Rows.isValidRow()){
		tblConditions.push({
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

var create = function (p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15){

	var db1 = Ti.Database.open("localData");
	db1.execute("CREATE TABLE IF NOT EXISTS conditions (id INTEGER PRIMARY KEY , customer TEXT, date TEXT, store TEXT, manager TEXT, problem TEXT, promised TEXT)");
	db1.execute("INSERT INTO conditions (customer, date, store, manager, problem, promise) VALUES (?, ?, ?, ?, ?, ?)", p1, p2, p3, p4, p5, p6);
	var rowID = db1.lastInsertRowId;
	db1.close();
	tblConditions = [];
	read();
	
};
exports.create = create;

var update = function (p1, p2, p3, p4, p5, p6, p7){

	var db1 = Ti.Database.open("localData");
	db1.execute("UPDATE conditions SET customer=?, date=?, store=?, manager=?, problem=?, promise=? WHERE id=?", p1, p2, p3, p4, p5, p6, p7);
	db1.close();
	tblConditions = [];
	read();
};
exports.update = update;

var del = function(id){
	var db1 = Ti.Database.open("localData");
	db1.execute("DELETE FROM conditions WHERE id=?", id);
	db1.close();
	tblConditions = [];
	read();
};
exports.del = del;

exports.tblConditions = tblConditions;
//console.log(tblConditions);
