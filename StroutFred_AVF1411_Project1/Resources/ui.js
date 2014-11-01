var buildUI = function(icon){
	var bottomBG = Ti.UI.createView({
		top: 410,
		height: 150,
		width: 150,
		borderRadius: 75,
		backgroundColor: "#ddd",
		opacity: .8
	});
	
	var patch1 = Ti.UI.createView({
		backgroundColor: "#09f",
		top: 410,
		width: 150,
		height: 100
	});
	
	var backGround = Ti.UI.createView({
		top: 100,
		backgroundColor: "#ddd",
		height: 410,
		width: "80%",
		opacity: .8,
		borderRadius: 30
	});

	var iconBG = Ti.UI.createView({
		top: 85,
		backgroundColor: "#444",
		width: 140,
		height: 70,
		borderRadius: 15
	});
	
	var patch2 = Ti.UI.createView({
		backgroundColor: "#09f",
		top: 85,
		width: 140,
		height: 15
	});
	
	var iconImage = Ti.UI.createImageView({
		image: icon,
		top: 86,
		width: 65,
		height: 65
	});
	
	window.add(bottomBG);
	window.add(patch1);
	window.add(backGround);
	window.add(iconBG);
	window.add(patch2);
	window.add(iconImage);
};
exports.buildUI = buildUI;