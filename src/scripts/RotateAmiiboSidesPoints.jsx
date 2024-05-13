function RotateAmiiboSidesPoints(amiibo, baseAmiibo, rotationType) {
	switch (rotationType) {
		case '90deg':
			amiibo.stone.sidesPoints['north'] = baseAmiibo.stone.sidesPoints['east'];
			amiibo.stone.sidesPoints['east'] = baseAmiibo.stone.sidesPoints['south'];
			amiibo.stone.sidesPoints['south'] = baseAmiibo.stone.sidesPoints['west'];
			amiibo.stone.sidesPoints['west'] = baseAmiibo.stone.sidesPoints['north'];
			break;
		case '180deg':
			amiibo.stone.sidesPoints['north'] = baseAmiibo.stone.sidesPoints['south'];
			amiibo.stone.sidesPoints['east'] = baseAmiibo.stone.sidesPoints['west'];
			amiibo.stone.sidesPoints['south'] = baseAmiibo.stone.sidesPoints['north'];
			amiibo.stone.sidesPoints['west'] = baseAmiibo.stone.sidesPoints['east'];
			break;
		case '-90deg':
			amiibo.stone.sidesPoints['north'] = baseAmiibo.stone.sidesPoints['west'];
			amiibo.stone.sidesPoints['east'] = baseAmiibo.stone.sidesPoints['north'];
			amiibo.stone.sidesPoints['south'] = baseAmiibo.stone.sidesPoints['east'];
			amiibo.stone.sidesPoints['west'] = baseAmiibo.stone.sidesPoints['south'];
			break;
		case 'diagonal':
			amiibo.stone.sidesPoints['north'] = baseAmiibo.stone.sidesPoints['east'];
			amiibo.stone.sidesPoints['east'] = baseAmiibo.stone.sidesPoints['north'];
			amiibo.stone.sidesPoints['south'] = baseAmiibo.stone.sidesPoints['west'];
			amiibo.stone.sidesPoints['west'] = baseAmiibo.stone.sidesPoints['south'];
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

export default RotateAmiiboSidesPoints;
