import tierDetails from '../data/smashBrosTierListSlots.json';
import charactersList from '../data/smashBrosTierListCharacters.json';

function SetAmiiboTier (amiibo) {
	const BreakException = {type: 'Break'};

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
			if (e.type === undefined || e.type !== BreakException.type) throw e;
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
		if (e.type === undefined || e.type !== BreakException.type) throw e;
	}
	return amiiboCharacterIndex;
}

export default SetAmiiboTier;