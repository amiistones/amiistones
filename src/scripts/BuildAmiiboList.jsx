import { apiAmiiboList } from '../api/amiiboList.jsx';

import SetAmiiboTier from './SetAmiiboTier.jsx';
import DefineAmiiboSidesPoints from './DefineAmiiboSidesPoints.jsx';
import DefineSpecificAmiiboRotations from './DefineSpecificAmiiboRotations.jsx';

import SetAegisSwitch from './SetAegisSwitch.jsx';
import SetPokemonTrainerSwitch from './SetPokemonTrainerSwitch.jsx';

function BuildAmiiboList () {

	const BreakException = {type: 'Break'};
	const characterNotFound = [];
	const amiiboList = apiAmiiboList;

	amiiboList.forEach((amiibo) => { //foreach amiibo fetched
		const characterIndex = SetAmiiboTier(amiibo);
		if (characterIndex === -1) {
			characterNotFound.push(amiibo);
		} else {
			DefineAmiiboSidesPoints(amiibo);
		}
	});

	amiiboList.forEach((amiibo) => { //foreach amiibo for specific points table
		try {
			DefineSpecificAmiiboRotations (amiibo, amiiboList);
		} catch (e) {
			if (e.type === undefined || e.type !== BreakException.type) throw e;
		}
	});

	SetAegisSwitch(amiiboList);
	SetPokemonTrainerSwitch(amiiboList);

	amiiboList.forEach((amiibo) => { //rename the Pokémon license game and Pok&mon Trainer correctly
		if (amiibo.data.gameSeries === "Pokemon") {
			amiibo.data.gameSeries = "Pokémon";
		}
		if (amiibo.data.name === "Pokemon Trainer") {
			amiibo.data.name = "Pokémon Trainer";
		}
	});
	return amiiboList;
}

export default BuildAmiiboList;
