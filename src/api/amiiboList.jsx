import axios from 'axios';

const apiURL = "https://amiiboapi.com/api/amiibo/";

export const apiAmiiboList = [];

await axios
	.get(`${apiURL}?amiiboSeries=Super+Smash+Bros`)
	.then((response) => {
		let amiiboData = '';
		for (let i=0; i<response.data.amiibo.length; i++){
			amiiboData = response.data.amiibo[i];
			delete amiiboData.head;
			delete amiiboData.tail;
			amiiboData.tier = 'F';
			apiAmiiboList.push({
				data: amiiboData,
				stone: {
						hasSpecial: false,
						hasPlayed: false,
						startTeam: null,
						currentTeam: null,
						sidesPoints: {
									total: null,
									north: 0,
									east: 0,
									south: 0,
									west: 0
									}
						},
				switchIndex: null
			});
		}
	});
