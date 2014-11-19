var loadDetail = function(dataSource){
	
	
	// Creates the Opportunty Detail Window
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#bf0c0c",
		title: "Customer Recovery",
		statusBarStyle: 2,
		barColor: "#bf0c0c",
		titleAttributes: {color: "#fc0"},
		backButtonTitle: "Back"
	});
	
	var lblCustomer = Ti.UI.createLabel({
		text: "Customer:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: 25,
		height: 14,
		left: 13
	});
	
	// Labels
	var lblDate = Ti.UI.createLabel({
		text: "Date:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: 25,
		height: 14,
		left: 213
	});
	
	var lblOpportunity = Ti.UI.createLabel({
		text: "Opportunity:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblCustomer.top + lblCustomer.height + 45,
		height: 14,
		left: 13
	});
	
	var lblPromise = Ti.UI.createLabel({
		text: "Promised Resolution:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblOpportunity.top + lblOpportunity.height + 75,
		height: 14,
		left: 13
	});
	
	var lblPromisedBy = Ti.UI.createLabel({
		text: "Promised By:",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#eee",
		top: lblPromise.top + lblPromise.height + 75,
		height: 14,
		left: 13
	});
	
	// Data
	var rowID = dataSource.id;
	exports.rowID = rowID;
	
	var dataCustomer = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblCustomer.top + 16,
		left: 8
	});
	exports.dataCustomer = dataCustomer;
	
	var dataDate = Ti.UI.createLabel({
		text: dataSource.id,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblCustomer.top + 16,
		left: 208
	});
	exports.dataDate = dataDate;
	
	/*var dataOpportunity = Ti.UI.createLabel({
		text: dataSource.problem,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblOpportunity.top + 16,
		left: 8
	});
	exports.dataOpportunity = dataOpportunity;
	
	// Highlighted the Promised Resolution
	var customBackground = Ti.UI.createView({
		borderColor: "#222",
		borderWidth: 2,
		borderRadius: 7,
		backgroundColor: "#ffcc00",
		top: lblPromise.top + 18,
		height: 70,
		left: 4,
		width: 308,
		zIndex: 1
	});
	
	var dataPromise = Ti.UI.createLabel({
		text: dataSource.promise,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#bf0c0c",
		textAlign: "left",
		verticalAlign: 1,
		top: lblPromise.top + 20,
		height: 66,
		left: 8,
		width: 300,
		zIndex: 2
	});
	exports.dataPromise = dataPromise;
	
	var dataPromisedBy = Ti.UI.createLabel({
		text: dataSource.manager,
		font: {fontSize: 18, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#ffcc00",
		top: lblPromisedBy.top + 16,
		left: 8
	});
	
	// Popup Modal buttons
	var butMakeItRight = Ti.UI.createLabel({
		text: "Make it Right!",
		borderColor: "#333",
		borderWidth: 2,
		borderRadius: 5,
		backgroundColor: "#0f0",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333",
		top: 425,
		left: 10,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	butMakeItRight.addEventListener("click", openSaveModal);
	
	var butCancel = Ti.UI.createLabel({
		text: "-Cancel-",
		font: {fontSize: 14, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#fc0",
		top: 425,
		left: 135,
		width: 120,
		height: 35,
		textAlign: "center"
	});
	
	butCancel.addEventListener("click", function(){
		detailWindow.close();
	});
	
	// Creates the Menu Bar Buttons
	var butAdd = Ti.UI.createButton({
		title: "Edit",
		left: 15
	});
	
	var tagline = Ti.UI.createLabel({
		borderColor: "#333",
		borderWidth: 2,
		backgroundColor: "#fc0",
		font: {fontSize: 11, fontFamily: "Helvetica Neue", fontWeight: "bold"},
		color: "#333",
		text: "Be Clean - Be Nice - Be Fast - Get It Right! - Make It Right!!!",
		textAlign: "center",
		bottom: 10,
		width: "100%",
		height: 22
	});*/
	
	//var getUpdate = require("update"); // Declared here because it creates a loop if it is declared globally
	
	//menuBar.add(titleMB, butAdd);
	//butAdd.addEventListener("click", getUpdate.loadInput);
	detailWindow.add(lblCustomer, lblDate, lblOpportunity, lblPromise, lblPromisedBy, dataCustomer,
					dataDate);
	detailWindow.open();
};
exports.loadDetail = loadDetail;