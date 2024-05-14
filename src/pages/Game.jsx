import { useLoaderData } from "react-router-dom";

import Stage from '../coponents/Stage.jsx'; 

function Game() {
	document.title = `Game - Amiistones`;
	
	const amiiboList = useLoaderData();
	const teamsColors = {red: "#e04827", green: "#66ce51", blue: "#4894e9", yellow: "#dcc100"};
	const currentTeamTurn = "blue";

	return (
		<>
		<div className="scoreDisplay">
			<p>11</p>
			<p>03</p>
		</div>
		<h1 className="turnDisplay">Team turn: <span style={{color: teamsColors[currentTeamTurn]}}>
		{currentTeamTurn.charAt(0).toUpperCase() + currentTeamTurn.slice(1)}</span></h1> 
			<Stage />
		</>
		);
}

export default Game;
