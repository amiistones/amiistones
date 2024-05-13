import charactersList from '../data/smashBrosTierListCharacters.json';

import RotateAmiiboSidesPoints from './RotateAmiiboSidesPoints.jsx';

function DefineSpecificAmiiboRotations(amiibo, amiiboList) {
	const BreakException = {type: 'Break'};

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

export default DefineSpecificAmiiboRotations