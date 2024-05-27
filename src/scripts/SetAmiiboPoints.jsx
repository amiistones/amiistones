function SetAmiiboPoints (amiibo, pointsLeft, number, minSides, maxSides) {
	const sidesNames = ['north', 'east', 'south', 'west'];

	if (number >= 1) {
		const sidesWithNumberOfPoints = [];
		const numberOfSidesWithNumberOfPoints = minSides + (Math.floor(Math.random() * maxSides));
		for (let i=0; i<numberOfSidesWithNumberOfPoints; i++) {
			let thatSideWithNumberOfPoints = Math.floor(Math.random() * 4);
			while (amiibo.stone.sidesPoints[sidesNames[thatSideWithNumberOfPoints]] !== 1) {
				thatSideWithNumberOfPoints = Math.floor(Math.random() * 4);
			}
			sidesWithNumberOfPoints.push(thatSideWithNumberOfPoints);
			amiibo.stone.sidesPoints[sidesNames[thatSideWithNumberOfPoints]] += (number -1);
			pointsLeft -= (number -1);
		}

		while (pointsLeft !== 0) {
			let thatSide = Math.floor(Math.random() * 4);
			if ((amiibo.stone.sidesPoints[sidesNames[thatSide]] < number && number >= 3) ||
				(amiibo.stone.sidesPoints[sidesNames[thatSide]] <= number && number < 3) &&
				sidesWithNumberOfPoints.includes(thatSide) === false) {

				amiibo.stone.sidesPoints[sidesNames[thatSide]] += 1;
				pointsLeft -= 1;
			}
		}

	} else { //if numer is for empty sides
		const sidesWithNoPoints = [];
		const numberOfSidesWithNoPoints = minSides + (Math.floor(Math.random() * maxSides));
		for (let i=0; i<numberOfSidesWithNoPoints; i++) {
			let thatSideWithNoPoints = Math.floor(Math.random() * 4);
			while (sidesWithNoPoints.includes(sidesNames[thatSideWithNoPoints])) {
				thatSideWithNoPoints = Math.floor(Math.random() * 4);
			}
			sidesWithNoPoints.push(sidesNames[thatSideWithNoPoints]);
		}

		sidesNames.forEach((side) => { //asign one to all other sides
			if(sidesWithNoPoints.includes(side) === false) {
				amiibo.stone.sidesPoints[side] += 1;
				pointsLeft -= 1;
			}
		});

		while (pointsLeft !== 0) {
			let thatSide = Math.floor(Math.random() * 4);
			if (amiibo.stone.sidesPoints[sidesNames[thatSide]] <= 3 &&
				sidesWithNoPoints.includes(sidesNames[thatSide]) === false) {

				amiibo.stone.sidesPoints[sidesNames[thatSide]] += 1;
				pointsLeft -= 1;
			}
		}
	}
}

export default SetAmiiboPoints;
