import axios from 'axios';

const apiURL = "https://amiiboapi.com/api/amiibo/";
const fetchNumber = 10; // will be replace by "response.data.amiibo.length" in the loop one test phase is finished

export const amiiboList = [];

axios
	.get(`${apiURL}?amiiboSeries=Super+Smash+Bros`)
	.then((response) => {
		let amiiboData = '';
		for (let i=0; i<fetchNumber; i++){
			amiiboData = response.data.amiibo[i];
			delete amiiboData.head;
			delete amiiboData.tail;
			amiiboData.tier = 'F';
			amiiboList.push({
				data: amiiboData,
				stone: {
						hasSpecial: false,
						hasPlayed: false,
						startTeam: null,
						teamColor: null,
						sidesPoints: {
									North: 0,
									East: 0,
									South: 0,
									West: 0
									}
						}
			});
		}
	});
