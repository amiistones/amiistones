function SetAegisSwitch(amiiboList) {
	const BreakException = {type: 'Break'};
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
		if (e.type === undefined || e.type !== BreakException.type) throw e;
	}

	if (indexPyra !== -1 && indexMythra !== -1) {
		amiiboList[indexPyra].switchIndex = indexMythra;
		amiiboList[indexMythra].switchIndex = indexPyra;
	}
}

export default SetAegisSwitch;
