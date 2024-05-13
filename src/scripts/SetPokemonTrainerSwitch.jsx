function SetPokemonTrainerSwitch(amiiboList) {
	const BreakException = {type: 'Break'};
	let indexPokemonTrainer = -1;
	let indexSquirtle = -1;
	let indexIvysaur = -1;
	let indexCharizard = -1;
	
	try {
		amiiboList.forEach((amiibo) => {
			if (indexPokemonTrainer !== -1 &&
				indexSquirtle !== -1 &&
				indexIvysaur !== -1 &&
				indexCharizard !== -1) {
				throw BreakException;
			}
			if (amiibo.data.name === "Pokemon Trainer") {
				indexPokemonTrainer = amiiboList.indexOf(amiibo);
			}
			if (amiibo.data.name === "Squirtle") {
				indexSquirtle = amiiboList.indexOf(amiibo);
			}
			if (amiibo.data.name === "Ivysaur") {
				indexIvysaur = amiiboList.indexOf(amiibo);
			}
			if (amiibo.data.name === "Charizard") {
				indexCharizard = amiiboList.indexOf(amiibo);
			}
		});
	} catch (e) {
		if (e.type === undefined || e.type !== BreakException.type) throw e;
	}

	if (indexSquirtle !== -1 && indexIvysaur !== -1 && indexCharizard !== -1) {
		amiiboList[indexSquirtle].switchIndex = indexIvysaur;
		amiiboList[indexIvysaur].switchIndex = indexCharizard;
		amiiboList[indexCharizard].switchIndex = indexSquirtle;
		if (indexPokemonTrainer !== -1) {
			amiiboList[indexPokemonTrainer].switchIndex = [indexSquirtle, indexIvysaur, indexCharizard];
		}
	}
}

export default SetPokemonTrainerSwitch;
