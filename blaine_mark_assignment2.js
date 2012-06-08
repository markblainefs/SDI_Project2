//alert("JavaScript works!");

//Mark A. Blaine;
//SDI 1206;
//Assignment 2;

	var bandsPlaying = ["Ludacris", "Red Hot Chili Peppers", "Radiohead"];
	var startTime = 1800;
	var stageName = "Where";
	var transportation = "car";
	var sleepingBag = true;
	var tentCamping = false;
	
	var howDoWeGetThere = function(vehicle){
		if (vehicle === "car"){
			console.log("We are driving to Tennessee");
		} else {
			console.log("We aren\'t driving to Bonnaroo");
		};
	};   //end hoDoWeGetThere
	
	var readyToCamp = function(tent,bag){
		var everythingReady = (tent && bag);
		if (everythingReady){
			console.log("Let\'s go camping");
		} else {
			console.log("We need to do some shopping");
		}

	}
	
	
	
	howDoWeGetThere(transportation);
	readyToCamp(tentCamping,sleepingBag)