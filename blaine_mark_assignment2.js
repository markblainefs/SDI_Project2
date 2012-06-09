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
	};	//end hoDoWeGetThere
	
	var readyToCamp = function(tent,bag){
		var everythingReady = (tent && bag);
		if (everythingReady){
			console.log("Let\'s go camping");
		} else {
			console.log("We need to do some shopping");
		};
		return everythingReady;
	};	//end readyToCamp
	
	
	var stayHydrated = function(waterNeeded){
		var waterHad = 2;
		while (waterHad < waterNeeded) {
			console.log("We only have " + waterHad + " bottles, but we need " + waterNeeded + " bottles");
			waterHad++;
		};
		return waterHad;
	};
	
	var whatIsThePlan = function(stage,section){
		var food = "hot dog";
		var drink = "Coke";
		var plan = "I\'m going to eat a " + food + " and drink " + drink + " in the " + section + " section of the " + stage + " stage";
		return plan;
	};
		
	howDoWeGetThere(transportation);
	console.log("The thought that I am ready to camp is " + readyToCamp(tentCamping,sleepingBag));
	console.log(stayHydrated(12) + " bottles should be plenty of water");
	console.log(whatIsThePlan("What","VIP"));
	
