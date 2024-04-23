import { tmpAmiiboList } from '../api/amiiboList.jsx';
import tierDetails from '../data/smashBrosTierListSlots.json';
import charactersList from '../data/smashBrosTierListCharacters.json';

const sidesNames = ['North', 'East', 'South', 'West'];
export const amiiboList = [];

function BuildPoints (amiibo, pointsLeft, number, minSides, maxSides) {

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
			if (amiibo.stone.sidesPoints[sidesNames[thatSide]] <= number &&
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

function DefineAmiiboTier (amiibo) {

	let amiiboCharacterIndex = 0;
	charactersList.forEach((character, index) => { //find the character index in charactersList
		if (amiibo.data.name === character.characterName) {
			amiiboCharacterIndex = index;
		}
	});

	tierDetails.forEach((tier) => { //foreach within the tiers to find the one
		if (charactersList[amiiboCharacterIndex].characterRank >= tier.firstSlot &&
			charactersList[amiiboCharacterIndex].characterRank <= tier.lastSlot) {
			amiibo.data.tier = tier.name;
			amiibo.stone.sidesPoints.total = tier.totalSidesPoints;
		}
	});
}

function DefineAmiiboSidesPoints (amiibo) {
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
			BuildPoints(amiibo, pointsLeft, 4, 1, 2);
			break;
		case 'A' :
			BuildPoints(amiibo, pointsLeft, 3, 1, 3);
			break;
		case 'B' :
			BuildPoints(amiibo, pointsLeft, 2, 1, 3);
			break;
		case 'C' :
			BuildPoints(amiibo, pointsLeft, 1, 0, 0);
			break;
		case 'D' :
			BuildPoints(amiibo, pointsLeft, 0, 1, 1);
			break;
		case 'E' :
			BuildPoints(amiibo, pointsLeft, 0, 2, 2);
			break;
	}
}


tmpAmiiboList.forEach((amiibo) => { //foreach amiibo fetched
	DefineAmiiboTier(amiibo);
	DefineAmiiboSidesPoints(amiibo);
});

console.log(tmpAmiiboList);
