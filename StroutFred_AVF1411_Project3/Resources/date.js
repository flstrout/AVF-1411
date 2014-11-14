// AVF-1411 - Project 3
// Fred L. Strout
// Created: 11/11/2014

var today = "";

// Make a current date stamp
var todayDate = function(a){
	today = new Date();
	var mm = today.getMonth()+1;  // +1 Because January returns as zero, February returns as 1, etc, etc.
	var dd = today.getDate()+a;
	var yyyy = today.getFullYear();
	
	// Add a leading zero to months and days that have less than two digits
	if(mm < 10) {
	    mm= "0" + mm;
	};
	
	if(dd < 10) {
	    dd= "0" + dd;
	};
	
	today = yyyy + "-" + mm + "-" + dd;
	date = today;
	console.log(today);
	return date;
};
//console.log(today);
exports.todayDate = todayDate;