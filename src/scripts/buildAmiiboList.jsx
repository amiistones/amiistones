import { apiAmiiboList } from '../api/amiiboList.jsx';
import tierDetails from '../data/smashBrosTierListSlots.json';
import charactersList from '../data/smashBrosTierListCharacters.json';

const BreakException = {};
const sidesNames = ['North', 'East', 'South', 'West'];
const characterNotFound = [];
export const amiiboList = apiAmiiboList;

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

function DefineAmiiboTier (amiibo) {

	let amiiboCharacterIndex = 0;
	let characterFound = false;

	if (charactersList.indexOf(amiibo.data.name) === -1) {
		try {
			charactersList.forEach((character, index) => { //find the character index in charactersList
				if (amiibo.data.name.startsWith(character.characterName)) {
					amiiboCharacterIndex = index;
					characterFound = true;
				}
			});
		} catch (e) {
			if (e !== BreakException) throw e;
		}
	} else {
		amiiboCharacterIndex = charactersList.indexOf(amiibo.data.name);
		characterFound = true;
	}

	if (characterFound === false) {
		return -1;
	}

	try {
		tierDetails.forEach((tier) => { //foreach within the tiers to find the one
			if (charactersList[amiiboCharacterIndex].characterRank >= tier.firstSlot &&
				charactersList[amiiboCharacterIndex].characterRank <= tier.lastSlot) {
				amiibo.data.tier = tier.name;
				amiibo.stone.sidesPoints.total = tier.totalSidesPoints;
			}
		});
	} catch (e) {
		if (e !== BreakException) throw e;
	}
	return amiiboCharacterIndex;
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
		default :
			console.log(`ERROR: Unknown tier: "${amiibo.data.tier[0]}"`);
			break;
	}
}

function RotateAmiiboSidesPoints(amiibo, baseAmiibo, rotationType) {
	switch (rotationType) {
		case '90deg':
			amiibo.stone.sidesPoints['North'] = baseAmiibo.stone.sidesPoints['East'];
			amiibo.stone.sidesPoints['East'] = baseAmiibo.stone.sidesPoints['South'];
			amiibo.stone.sidesPoints['South'] = baseAmiibo.stone.sidesPoints['West'];
			amiibo.stone.sidesPoints['West'] = baseAmiibo.stone.sidesPoints['North'];
			break;
		case '180deg':
			amiibo.stone.sidesPoints['North'] = baseAmiibo.stone.sidesPoints['South'];
			amiibo.stone.sidesPoints['East'] = baseAmiibo.stone.sidesPoints['West'];
			amiibo.stone.sidesPoints['South'] = baseAmiibo.stone.sidesPoints['North'];
			amiibo.stone.sidesPoints['West'] = baseAmiibo.stone.sidesPoints['East'];
			break;
		case '-90deg':
			amiibo.stone.sidesPoints['North'] = baseAmiibo.stone.sidesPoints['West'];
			amiibo.stone.sidesPoints['East'] = baseAmiibo.stone.sidesPoints['North'];
			amiibo.stone.sidesPoints['South'] = baseAmiibo.stone.sidesPoints['East'];
			amiibo.stone.sidesPoints['West'] = baseAmiibo.stone.sidesPoints['South'];
			break;
		case 'diagonal':
			amiibo.stone.sidesPoints['North'] = baseAmiibo.stone.sidesPoints['East'];
			amiibo.stone.sidesPoints['East'] = baseAmiibo.stone.sidesPoints['North'];
			amiibo.stone.sidesPoints['South'] = baseAmiibo.stone.sidesPoints['West'];
			amiibo.stone.sidesPoints['West'] = baseAmiibo.stone.sidesPoints['South'];
			break;
		case null:
		case undefined:
			console.log(`ERROR: Undefined rotation on "${amiibo.data.name}"`);
			break;
		default:
			console.log(`ERROR: Unknown rotation: "${rotationType}"`);
			break;
	}
}

function SpecificRotations(amiibo) {
	switch (amiibo.data.name) {
		case "Alex":
			amiiboList.forEach((character) => {
				if(character.data.name.startsWith("Steve")) {
					RotateAmiiboSidesPoints(amiibo, character, 'diagonal');
					throw BreakException;
				}
			});
			break;

		case "Pyra":
			amiiboList.forEach((character) => {
				if(character.data.name.startsWith("Mythra")) {
					RotateAmiiboSidesPoints(amiibo, character, 'diagonal');
					throw BreakException;
				}
			});
			break;

		case "Squirtle":
		case "Ivysaur":
		case "Charizard":
			amiiboList.forEach((character) => {
				if(character.data.name.startsWith("Pokemon Trainer")) {
					switch (amiibo.data.name) {
						case "Squirtle":
							RotateAmiiboSidesPoints(amiibo, character, '-90deg');
							break;
						case "Ivysaur":
							RotateAmiiboSidesPoints(amiibo, character, '180deg');
							break;
						case "Charizard":
							RotateAmiiboSidesPoints(amiibo, character, '90deg');
							break;
					}
					throw BreakException;
				}
			});
			break;

		default:
			break;
	}

	if (amiibo.data.name.endsWith(" - Player 2")) {
		amiiboList.forEach((character) => {
			if(character.data.name.startsWith(amiibo.data.name.split(' ')[0]) &&
				character !== amiibo) {
				RotateAmiiboSidesPoints(amiibo, character, '180deg');
				throw BreakException;
			}
		});
	}
	else {
		let baseAmiibo = -1;
		charactersList.forEach((c) => {
			if (amiibo.data.name.startsWith(c.characterName) &&
				c.isEcho === true) {
				amiiboList.forEach((character) => {
					if(character.data.name.startsWith(c.basedOn)) {
						RotateAmiiboSidesPoints(amiibo, character, '180deg');
						throw BreakException;
					}
				});
			}
		});
	}
}

function DefineAegisSwitch() {
	let indexPyra = -1;
	let indexMythra = -1;
	
	try {
		amiiboList.forEach((amiibo) => {
			if (indexPyra !== -1 && indexMythra !== -1) {
				throw BreakException;
			}
			if (amiibo.data.name === "Pyra") {
				indexPyra = amiiboList.indexOf(amiibo);
			}
			if (amiibo.data.name === "Mythra") {
				indexMythra = amiiboList.indexOf(amiibo);
			}
		});
	} catch (e) {
		if (e !== BreakException) throw e;
	}

	if (indexPyra !== -1 && indexMythra !== -1) {
		amiiboList[indexPyra].switchIndex = indexMythra;
		amiiboList[indexMythra].switchIndex = indexPyra;
	}
}


amiiboList.forEach((amiibo) => { //foreach amiibo fetched
	const characterIndex = DefineAmiiboTier(amiibo);
	if (characterIndex === -1) {
		characterNotFound.push(amiibo);
	} else {
		DefineAmiiboSidesPoints(amiibo);
	}
});


amiiboList.forEach((amiibo) => { //foreach amiibo for specific points table
	try {
		SpecificRotations (amiibo);
	} catch (e) {
		if (e !== BreakException) throw e;
	}
});

DefineAegisSwitch();
