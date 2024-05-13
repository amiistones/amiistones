import SetAmiiboPoints from './SetAmiiboPoints.jsx';

function DefineAmiiboSidesPoints (amiibo) {
	const sidesNames = ['north', 'east', 'south', 'west'];
	let pointsLeft = amiibo.stone.sidesPoints.total;

	if (amiibo.data.tier[0] !== 'D' &&
		amiibo.data.tier[0] !== 'E') { //every stone which is not E tier have all sides with points
		sidesNames.forEach((side) => {
			amiibo.stone.sidesPoints[side] = 1;
			pointsLeft -= 1;
		});
	}

	switch(amiibo.data.tier[0]) {
		case 'S' :
			SetAmiiboPoints(amiibo, pointsLeft, 4, 1, 2);
			break;
		case 'A' :
			SetAmiiboPoints(amiibo, pointsLeft, 3, 1, 3);
			break;
		case 'B' :
			SetAmiiboPoints(amiibo, pointsLeft, 2, 1, 3);
			break;
		case 'C' :
			SetAmiiboPoints(amiibo, pointsLeft, 1, 0, 0);
			break;
		case 'D' :
			SetAmiiboPoints(amiibo, pointsLeft, 0, 1, 1);
			break;
		case 'E' :
			SetAmiiboPoints(amiibo, pointsLeft, 0, 2, 2);
			break;
		default :
			console.log(`ERROR: Unknown tier: "${amiibo.data.tier[0]}"`);
			break;
	}
}

export default DefineAmiiboSidesPoints;
